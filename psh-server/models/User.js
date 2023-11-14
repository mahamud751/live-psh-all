import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    userName: {
      type: String,
    },
    userId: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    refferCode: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Other",
    },
    nationalId: {
      type: Number,
    },

    nationality: {
      type: String,
    },
    password: {
      type: String,
    },
    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    },
    role: {
      type: String,
      enum: ["SuperAdmin", "admin", "user", "manager", "partner"],
      default: "user",
    },
    userStatus: {
      type: String,
      enum: ["Active", "Deactive", "Blocked"],
      default: "Active",
    },

    // Present Address
    presentAddress: {
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      postCode: {
        type: Number,
      },
      country: {
        type: String,
      },
    },
    // Parmanent Address
    permanentAddress: {
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      postCode: {
        type: Number,
      },
      country: {
        type: String,
      },
    },
    idCardType: {
      type: String,
    },
    cardImage: {
      type: String,
    },
    // Employment Status
    employmentStatus: {
      workAs: {
        type: String,
      },
      monthlyIncome: {
        type: String,
      },
    },
    // Emergency Contact
    emergencyContact: {
      contactName: {
        type: String,
      },
      relation: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
