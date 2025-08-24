import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  image: String,
  provider: String,
});

// Prevent re-defining the model on hot reloads in Next.js
const User = models.User || model("User", UserSchema);

export default User;