import Transaction from "../models/Transaction.js";
import OrderModel from "../models/Order.js";
export const getTransaction = async (req, res, next) => {
  try {
    const userEmail = req.query?.email;
    const fromDate = req.query?.fromDate;
    const toDate = req.query?.toDate;
    const branch = req.query?.branch;
    if (req.query) {
      if (!userEmail && !fromDate && !toDate && !branch) {
        const transaction = await Transaction.find({}).populate("branch");

        res.status(200).json({
          status: "Success",
          message: "Success",
          transaction,
        });
      } else if (
        userEmail === "All" &&
        (!fromDate || !toDate) &&
        branch === "All"
      ) {
        const transaction = await Transaction.find({}).populate("branch");

        res.status(200).json({
          status: "Success",
          message: "Success",
          transaction,
        });
      } else if (
        userEmail === "All" &&
        (!fromDate || !toDate) &&
        branch !== "All"
      ) {
        const query = {
          branch: branch,
        };
        const transaction = await Transaction.find(query).populate("branch");

        res.status(200).json({
          status: "Success",
          message: "Success",
          transaction,
        });
      } else if (
        userEmail !== "All" &&
        (!fromDate || !toDate) &&
        branch === "All"
      ) {
        const query = {
          userEmail: req.query?.email,
        };
        const transaction = await Transaction.find(query).populate("branch");

        res.status(200).json({
          status: "Success",
          message: "Success",
          transaction,
        });
      } else if (
        userEmail !== "All" &&
        (!fromDate || !toDate) &&
        branch !== "All"
      ) {
        const query = {
          userEmail: req.query?.email,
          branch: branch,
        };
        const transaction = await Transaction.find(query).populate("branch");

        res.status(200).json({
          status: "Success",
          message: "Success",
          transaction,
        });
      } else if (
        userEmail === "All" &&
        fromDate &&
        toDate &&
        branch === "All"
      ) {
        const query = {
          // userPhone: req.query?.phoneNumber,
          paymentDate: {
            $gte: fromDate,
            $lte: toDate,
          },
        };

        const transaction = await Transaction.find(query).populate("branch");

        res.status(200).json({
          status: "Success",
          message: "Success",
          transaction,
        });
      } else if (
        userEmail !== "All" &&
        fromDate &&
        toDate &&
        branch === "All"
      ) {
        const query = {
          // branch: branch,
          userEmail: req.query?.email,
          paymentDate: {
            $gte: fromDate,
            $lte: toDate,
          },
        };
        const transaction = await Transaction.find(query).populate("branch");

        res.status(200).json({
          status: "Success",
          message: "Success",
          transaction,
        });
      } else if (
        userEmail === "All" &&
        fromDate &&
        toDate &&
        branch !== "All"
      ) {
        const query = {
          branch: branch,
          // userPhone: req.query?.phoneNumber,
          paymentDate: {
            $gte: fromDate,
            $lte: toDate,
          },
        };
        const transaction = await Transaction.find(query).populate("branch");

        res.status(200).json({
          status: "Success",
          message: "Success",
          transaction,
        });
      } else {
        const query = {
          branch: branch,
          userEmail: req.query?.email,
          paymentDate: {
            $gte: fromDate,
            $lte: toDate,
          },
        };
        const transaction = await Transaction.find(query).populate("branch");

        res.status(200).json({
          status: "Success",
          message: "Success",
          transaction,
        });
      }
    } else {
      const transaction = await Transaction.find({}).populate("branch");

      res.status(200).json({
        status: "Success",
        message: "Success",
        transaction,
      });
    }

    // .sort({ createdAt: -1 });

    // if totalAmount equal totalReceiveTk
    // const transaction = await Transaction.find({});

    // await Transaction.updateMany(
    //   {
    //     $expr: {
    //       $eq: ["$totalAmount", "$totalReceiveTk"],
    //     },
    //   },
    //   {
    //     $set: {
    //       paymentStatus: "Paid",
    //     },
    //   },
    //   { new: true }
    // );
    // // if not Match Total Receive Tk
    // await Transaction.updateMany(
    //   {
    //     $expr: {
    //       $ne: ["$totalAmount", "$totalReceiveTk"],
    //     },
    //   },
    //   {
    //     $set: {
    //       paymentStatus: "Unpaid",
    //     },
    //   },
    //   { new: true }
    // );
    // res.status(200).json({
    //   status: "Success",
    //   message: "Success",
    //   transaction,
    // });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Sorry Transaciton not found",
      error: error.message,
    });
  }
};
export const getUserTransactions = async (req, res, next) => {
  try {
    const email = req.params.email;

    const transaction = await Transaction.find({ email: email }).sort({
      createdAt: -1,
    });

    // if totalAmount equal totalReceiveTk

    res.status(200).json({
      status: "Success",
      message: "Success",
      transaction,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Sorry Transaciton not found",
      error: error.message,
    });
  }
};
export const UpdateTransaction = async (req, res, next) => {
  try {
    const id = req.params.id;
    const transaction = await Transaction.findById({ _id: id });
    // Order Total Receive Amount and dueAmount Update
    const transactions = await Transaction.find({
      orderId: transaction.orderId,
    });

    let myTotalReceiveTk = 0;

    for (const item of transactions) {
      myTotalReceiveTk += item.receivedTk;
    }

    const dueAmount =
      req.body?.totalAmount - (myTotalReceiveTk + req.body?.receivedTk);

    const finalTotalReceiveAmount = myTotalReceiveTk - transaction?.receivedTk;
    await OrderModel.findByIdAndUpdate(
      transaction.orderId,

      {
        $set: {
          // receivedTk: req.body?.receivedTk,
          // paymentType: req.body?.paymentType,
          dueAmount: dueAmount + transaction?.receivedTk,

          totalReceiveTk: finalTotalReceiveAmount + req.body?.receivedTk,

          // dueAmount: req.body?.dueAmount,
          // totalReceiveTk: req.body?.totalReceiveTk,
        },
      },
      { new: true }
    );

    const updatedTransaction = {
      orderId: transaction.orderId,
      branch: transaction?.branch,
      totalAmount: req.body?.totalAmount,
      paymentDate: req.body?.paymentDate,
      receivedTk: req.body?.receivedTk,
      // dueAmount: req.body?.dueAmount,
      // totalReceiveTk: req.body?.totalReceiveTk,
      discount: req.body?.discount,
      paymentType: req.body?.paymentType,
      userEmail: transaction?.email,
      userId: transaction?.userId,
      userName: transaction?.fullName,
      userPhone: transaction?.phone,
      // paymentStatus: req.body?.paymentStatus,
      paymentNumber: req.body?.paymentNumber,
      transactionId: req.body?.transactionId,
      bankName: req.body?.bankName,
      bankHoldingName: req.body?.bankHoldingName,
      receiverName: req.body?.receiverName,
    };

    await Transaction.updateOne(
      { _id: id },
      {
        $set: updatedTransaction,
      },
      // { runValidators: true },
      { new: true }
    );

    res.status(200).json({ status: "success", message: "Updated" });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Sorry ! Something is wrong",
      error: err.message,
    });
    next(err);
  }
};
export const deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.find({
      _id: req.params.id,
    });

    // Find Customer Order
    const findThisOrder = await OrderModel.find({
      _id: transaction[0].orderId,
    });

    await OrderModel.findByIdAndUpdate(
      transaction[0].orderId,

      {
        $set: {
          dueAmount: findThisOrder[0]?.dueAmount + transaction[0]?.receivedTk,
          totalReceiveTk:
            findThisOrder[0]?.totalReceiveTk - transaction[0]?.receivedTk,
        },
      },
      { new: true }
    );

    await Transaction.findByIdAndDelete(req.params.id);

    res.status(200).json({ status: "success", message: "Deleted" });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Sorry ! Something is wrong",
      error: err.message,
    });
    next(err);
  }
};
