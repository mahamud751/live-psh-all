import mongoose from "mongoose";

const RequestRent = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    totalRoom: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    companyEmail: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      enum: ["Share Room", "Private Room", "Apartment"],
      required: true,
    },

    availabilityForVisit: {
      type: Date,
      required: true,
    },
    availabilityForVisitTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "process", "success"],
      default: "pending",
    },
  },

  {
    timestamps: true,
  }
);
export default mongoose.model("RequestRent", RequestRent);
