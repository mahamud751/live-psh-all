import mongoose from "mongoose";
const BranchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    locationLink: {
      type: String,
      required: true,
    },
    // nearLocation: {
    //   type: String,
    //   required: true,
    // },
    branchAddress: {
      type: String,
      required: true,
    },
    branchMobileNumber: {
      type: String,
      required: true,
    },
    branchEmail: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
    property: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    issue: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Branch", BranchSchema);
