import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const TransactionSchema = new mongoose.Schema(
  {
    orderId: {
      type: ObjectId,
      ref: "Order",
      required: true,
    },
    branch: {
      type: ObjectId,
      ref: "Branch",
      // required: true,
    },
    paymentDate: {
      type: Date,
    },
    totalAmount: {
      type: Number,
    },
    receivedTk: {
      type: Number,
    },
    dueAmount: {
      type: Number,
    },
    totalReceiveTk: {
      type: Number,
    },
    discount: {
      type: Number,
      default: 0,
    },
    paymentType: {
      type: String,
    },
    paymentNumber: {
      type: String,
    },
    transactionId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    userId: {
      type: ObjectId,
      ref: "User",
      // required: true,
    },
    userName: {
      type: String,
    },
    userPhone: {
      type: String,
    },

    paymentStatus: {
      type: String,
    },
    bankName: {
      type: String,
    },
    bankHoldingName: {
      type: String,
    },
    receiverName: {
      type: String,
    },
    unReceivedTk: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Transacion = mongoose.model("Transacion", TransactionSchema);
export default Transacion;
