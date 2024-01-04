import OrderModel from "../models/Order.js";
import Property from "../models/Property.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import nodemailer from "nodemailer";

export const createOrder = async (req, res) => {
  const {
    fullName,
    fatherName,
    motherName,
    userId,
    email,
    phone,
    address,
    gender,
    birthDate,
    emergencyContactName,
    emergencyRelationC,
    emergencyContact,
    employeeStatus,
    emplyeeIncome,
    nid,
    passport,
    arrivalTime,
    request,
    paymentType,
    paymentNumber,
    transactionId,
    bkashNumber,
    bkashTrx,
    nagadNumber,
    nagadTrx,
    dutchNumber,
    dutchTrx,
    receivedTk,
    dueAmount,
    totalReceiveTk,
    // unReceivedTk,
    paymentStatus,
    totalAmount,

    bookingExtend,
  } = req.body;
  try {
    const bookingInfo = JSON.parse(req.body?.bookingInfo);
    const gardianImg = req?.files?.gardianImg[0].path;
    const image = req?.files?.image[0].path;
    const branch = bookingInfo?.branch;

    const newOrder = new OrderModel({
      // seat: seatId,
      bookingInfo,
      branch,
      fullName,
      fatherName,
      motherName,
      userId,
      email,
      phone,
      address,
      gender,
      birthDate,
      emergencyContactName,
      emergencyRelationC,
      emergencyContact,
      employeeStatus,
      emplyeeIncome,
      nid,
      passport,
      arrivalTime,
      request,
      image,
      gardianImg,
      paymentType,
      paymentNumber,
      transactionId,
      bkashNumber,
      bkashTrx,
      nagadNumber,
      nagadTrx,
      dutchNumber,
      dutchTrx,
      receivedTk,
      dueAmount,
      totalReceiveTk,
      // unReceivedTk,
      paymentStatus,
      totalAmount,

      bookingExtend,
    });

    // Order Mail to customer and Manager
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "alaminbamna08@gmail.com",
        pass: "qesfajhmrfhkfnbo",
      },
    });

    const mailOptions = {
      from: "alaminbamna08@gmail.com",
      to: `mohammad.alaminh08@gmail.com,${email}`,
      subject: "PSH Order",
      html: "<h1>Welcome</h1><p>Thanks For Order!</p>",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    const result = await newOrder.save();
    const userUpdate = {
      firstName: fullName,
      fatherName: fatherName,
      motherName: motherName,
      email: email,
      phone: phone,
      userAddress: address,
      passport: passport,
      dateOfBirth: birthDate,
      gender: gender,
      nationalId: nid,

      cardImage: image,
      gardianImg: gardianImg,

      employmentStatus: {
        workAs: employeeStatus,
        monthlyIncome: emplyeeIncome,
      },
      emergencyContact: {
        contactName: emergencyContactName,
        relation: emergencyRelationC,
        phoneNumber: emergencyContact,
      },
    };

    await User.updateOne(
      { email: email },
      { $set: userUpdate },
      { runValidators: true }
    );

    const currentDate = new Date().toISOString().split("T")[0];
    // Create Transaction whent First Order
    const transaction = new Transaction({
      orderId: result._id,
      branch: result?.bookingInfo?.branch,
      paymentDate: currentDate,
      totalAmount: result.totalAmount,
      receivedTk: result.receivedTk,
      // dueAmount: result.dueAmount,
      // totalReceiveTk: result.totalReceiveTk,
      discount: result.discount,
      paymentType: result.paymentType,
      paymentNumber: result?.paymentNumber,
      transactionId: result?.transactionId,
      userEmail: result.email,
      userName: result?.fullName,
      userId: result?.userId,
      userPhone: result?.phone,
      // paymentStatus: result.paymentStatus,
    });
    await transaction.save();
    res.status(200).json({
      status: "success",
      message:
        " Thank Youe ! Your Booking Successfully Done, I will very soon Contact You",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOrder = async (req, res, next) => {
  try {
    const branch = req.query?.branch;
    // const orders = await OrderModel.find({})
    //   .populate("branch")
    //   .sort({ createdAt: -1 });
    // res.status(200).json({
    //   orders,
    // });

    if (!branch) {
      const orders = await OrderModel.find({})
        .populate("branch")
        .sort({ createdAt: -1 });

      res.status(200).json({
        orders,
      });
    } else if (branch === "All") {
      const orders = await OrderModel.find({})
        .populate("branch")
        .sort({ createdAt: -1 });

      res.status(200).json({
        orders,
      });
    } else {
      const query = {
        branch: branch,
      };
      const orders = await OrderModel.find(query)
        .populate("branch")
        .sort({ createdAt: -1 });

      res.status(200).json({
        orders,
      });
    }

    // if totalAmount equal totalReceiveTk
    await OrderModel.updateMany(
      {
        $expr: {
          $eq: ["$totalAmount", "$totalReceiveTk"],
        },
      },
      {
        $set: {
          paymentStatus: "Paid",
        },
      },
      { new: true }
    );
    // if not Match Total Receive Tk
    await OrderModel.updateMany(
      {
        $expr: {
          $ne: ["$totalAmount", "$totalReceiveTk"],
        },
      },
      {
        $set: {
          paymentStatus: "Unpaid",
        },
      },
      { new: true }
    );
    // res.status(200).json({
    //   orders,
    // });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Sorry Order not found",
      error: error.message,
    });
  }
};

export const getSingleOrder = async (req, res, next) => {
  try {
    const propertyId = req.params.id;

    // Find the property by ID
    const property = await OrderModel.findById(propertyId).populate("branch");

    res.status(200).json(property);
  } catch (err) {
    next(err);
  }
};
export const getMyBooking = async (req, res, next) => {
  try {
    // const email = req.query.email;
    const user = req.params.user;
    const order = await OrderModel.find({ email: user }).populate("branch");
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};
export const updateBooking = async (req, res, next) => {
  try {
    const findSingleOrder = await OrderModel.find({ _id: req.params.id });
    const bookingInfo_Id = findSingleOrder[0].bookingInfo?.data?._id;

    const bookingInfoForShareRoomId = findSingleOrder[0].bookingInfo?.roomId;

    const bookingInfoForShareSeatId =
      findSingleOrder[0].bookingInfo?.seatBooking?._id;

    if (req.body?.status) {
      const updateOrder = await OrderModel.findByIdAndUpdate(
        req.params.id,
        { $set: { status: req.body.status } },
        { new: true }
      );

      if (findSingleOrder[0].bookingInfo?.roomType === "Shared Room") {
        if (req.body?.status === "Approved") {
          await Property.findByIdAndUpdate(
            { _id: bookingInfoForShareRoomId },
            {
              $push: {
                "seats.$[outer].rentDate":
                  findSingleOrder[0].bookingInfo?.rentDate,
              },
            },
            {
              arrayFilters: [{ "outer._id": bookingInfoForShareSeatId }],
            }
            // { new: true }
          );
        }
        // if cancel
        else {
          await Property.updateOne(
            {
              _id: bookingInfoForShareRoomId,
            },
            {
              $pull: {
                "seats.$[outer].rentDate": {
                  bookStartDate:
                    findSingleOrder[0].bookingInfo?.rentDate.bookStartDate,
                },
              },
            },
            {
              arrayFilters: [{ "outer._id": bookingInfoForShareSeatId }],
            }
            // { new: true }
          );
        }
      } else {
        if (req.body?.status === "Approved") {
          // const findSingleProperty = await Property.findOne({
          //   _id: bookingInfo_Id,
          // });

          // const isAlreadyPush = findSingleProperty.rentDate.find(
          //   (rent) =>
          //     rent.bookStartDate ===
          //     findSingleOrder[0].bookingInfo?.rentDate.bookStartDate
          // );

          // if (isAlreadyPush) return;

          await Property.findByIdAndUpdate(
            {
              _id: bookingInfo_Id,
            },
            {
              $push: {
                rentDate: findSingleOrder[0].bookingInfo?.rentDate,
              },
            },
            { new: true }
          );
          // res.status(200).json(updateOrder);
        } else {
          await Property.updateOne(
            { _id: bookingInfo_Id },
            {
              $pull: {
                rentDate: {
                  bookStartDate:
                    findSingleOrder[0].bookingInfo?.rentDate.bookStartDate,
                },
              },
            },
            { new: true }
          );
          // res.status(200).json(updateOrder);
        }
      }
    } else if (req.body?.receivedTk) {
      // const transactions = await Transaction.find({ orderId: req.params.id });
      // let totalReceiveTk = 0;

      // for (const item of transactions) {
      //   totalReceiveTk += item.receivedTk;
      // }

      await OrderModel.findByIdAndUpdate(
        req.params.id,

        {
          $set: {
            // receivedTk: req.body?.receivedTk,
            // paymentType: req.body?.paymentType,
            // dueAmount:
            //   req.body?.totalAmount - (totalReceiveTk + req.body?.receivedTk),
            // totalReceiveTk: totalReceiveTk + req.body?.receivedTk,

            dueAmount: req.body?.dueAmount,
            totalReceiveTk: req.body?.totalReceiveTk,
          },
        },
        { new: true }
      );

      // Create Transaction every payment Time
      const transaction = new Transaction({
        orderId: findSingleOrder[0]._id,
        branch: findSingleOrder[0]?.bookingInfo?.branch,
        paymentDate: req.body?.paymentDate,
        totalAmount: req.body?.totalAmount,
        receivedTk: req.body?.receivedTk,
        // unReceivedTk: req.body?.unReceivedTk,
        // dueAmount: req.body?.dueAmount,
        // totalReceiveTk: req.body?.totalReceiveTk,
        discount: req.body?.discount,
        paymentType: req.body?.paymentType,
        userEmail: findSingleOrder[0].email,
        userId: findSingleOrder[0].userId,
        userName: findSingleOrder[0]?.fullName,
        userPhone: findSingleOrder[0]?.phone,
        // paymentStatus: req.body?.paymentStatus,
        paymentNumber: req.body?.paymentNumber,
        transactionId: req.body?.transactionId,
        bankName: req.body?.bankName,
        bankHoldingName: req.body?.bankHoldingName,
        receiverName: req.body?.receiverName,
      });
      await transaction.save();
      // res.status(200).json({
      //   status: "Success",
      //   message: "Success",
      // });
    } else if (req.body?.unReceivedTk) {
      // If Payment Reduce
      await OrderModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            unReceivedTk: req.body?.unReceivedTk,
            dueAmount: req.body?.dueAmount,
            totalReceiveTk: req.body?.totalReceiveTk,
          },
        },
        { new: true }
      );
      // Create Transaction every payment-less Time
      const transaction = new Transaction({
        orderId: findSingleOrder[0]._id,
        branch: findSingleOrder[0]?.bookingInfo?.branch,
        paymentDate: req.body?.paymentDate,
        totalAmount: req.body?.totalAmount,
        receivedTk: req.body?.receivedTk,
        unReceivedTk: req.body?.unReceivedTk,
        dueAmount: req.body?.dueAmount,
        totalReceiveTk: req.body?.totalReceiveTk,
        discount: req.body?.discount,
        paymentType: req.body?.paymentType,
        userEmail: findSingleOrder[0].email,
        userId: findSingleOrder[0].userId,
        userName: findSingleOrder[0]?.fullName,
        userPhone: findSingleOrder[0]?.phone,
        paymentStatus: req.body?.paymentStatus,
        paymentNumber: req.body?.paymentNumber,
        transactionId: req.body?.transactionId,
        bankName: req.body?.bankName,
        bankHoldingName: req.body?.bankHoldingName,
        receiverName: req.body?.receiverName,
      });
      await transaction.save();
      res.status(200).json({
        status: "Success",
        message: "Success",
      });
    } else if (req?.body?.cancelReason) {
      await OrderModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            userCancel: req.body,
            isCancel: "Yes",
          },
        },
        { new: true }
      );

      // res.status(200).json({
      //   status: "Success",
      //   message: "Cancel Requeste Done",
      // });
    } else {
      await OrderModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            bookingInfo: req.body,
            totalAmount: req.body?.totalAmount,
            dueAmount: req.body?.dueAmount,
          },
        },
        { new: true }
      );
      // res.status(200).json(updateDate);

      if (req.body?.roomType === "Shared Room") {
        // Remove Previous Booking Date from match property
        await Property.updateOne(
          {
            _id: bookingInfoForShareRoomId,
          },
          {
            $pull: {
              "seats.$[outer].rentDate": {
                bookStartDate: req.body?.previousDate?.bookStartDate,
              },
            },
          },
          {
            arrayFilters: [{ "outer._id": bookingInfoForShareSeatId }],
          }
          // { new: true }
        );
        // Push Current Booking Date in match property
        await Property.updateOne(
          {
            _id: bookingInfoForShareRoomId,
          },
          {
            $push: {
              "seats.$[outer].rentDate": req.body?.rentDate,
            },
          },
          {
            arrayFilters: [{ "outer._id": bookingInfoForShareSeatId }],
          }
          // { new: true }
        );
      } else {
        // Remove Previous Booking Date from match property
        await Property.updateOne(
          {
            _id: bookingInfo_Id,
          },
          {
            $pull: {
              rentDate: {
                bookStartDate: req.body?.previousDate?.bookStartDate,
              },
            },
          },
          { new: true }
        );
        // Push Current Booking Date in match property
        await Property.updateOne(
          {
            _id: bookingInfo_Id,
          },
          {
            $push: {
              rentDate: req.body?.rentDate,
            },
          },
          { new: true }
        );
      }
    }

    // res.status(200).json(updateOrder);
    res.status(200).json({
      status: "Success",
      message: "Succefully Done",
    });
  } catch (err) {
    next(err);
  }
};
