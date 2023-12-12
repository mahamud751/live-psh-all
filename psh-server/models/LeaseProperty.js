import mongoose from "mongoose";

// Define the LeaseProperty Schema
const LeaseProperty = new mongoose.Schema(
  {
    purpose: {
      type: String,
      enum: ["rent", "franchising", "lease", "partnership"],
      default: "pending",
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    propertyName: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      enum: ["Share Room", "Private Room", "Apartment"],
      required: true,
    },

    propertySize: {
      type: String,
      required: true,
    },
    floorNumber: {
      type: String,
      required: true,
    },
    totalRooms: {
      type: Number,
      required: true,
    },
    totalBathrooms: {
      type: Number,
      required: true,
    },
    parking: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },
    elevator: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    stateRegion: {
      type: String,
      required: true,
    },
    postCode: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
      default: "Bangladesh",
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
export default mongoose.model("LeaseProperty", LeaseProperty);
