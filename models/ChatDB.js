import mongoose from "mongoose";

const connextMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    id: Number,
    text: String,
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);
export default Chat;
