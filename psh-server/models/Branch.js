import mongoose from "mongoose";
const BranchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    locationLink: {
      type: String,
    },
    // nearLocation: {
    //   type: String,
    //   required: true,
    // },
    branchAddress: {
      type: String,
    },
    branchMobileNumber: {
      type: String,
    },
    branchEmail: {
      type: String,
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
