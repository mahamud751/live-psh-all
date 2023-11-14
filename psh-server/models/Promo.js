import mongoose from "mongoose";

const PromoSchema = new mongoose.Schema(
  {
    promoName: {
      type: String,
    },
    promoCode: {
      type: String,
      trim: true,
      unique: true,
    },
    minimumDays: {
      type: String,
    },
    promoStart: {
      type: String,
    },
    promoEnd: {
      type: String,
    },
    promoDiscount: {
      type: Number,
    },
    promoDetails: {
      type: String,
    },
    photos: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Promo", PromoSchema);
