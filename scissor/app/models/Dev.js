// this will have Dev schema and model
import mongoose from "mongoose";

const DevSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    experience: { type: String },
    charge: { type: String },
    techStack: { type: String },
    phoneNumber: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Devs || mongoose.model("Devs", DevSchema);
