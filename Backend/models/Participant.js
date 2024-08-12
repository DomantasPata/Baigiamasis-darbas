import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
  username: String,
  password: String,
});

export default mongoose.model("participant", participantSchema);
