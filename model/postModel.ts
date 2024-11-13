import { Schema } from "mongoose";
import { model } from "mongoose";
import { Types } from "mongoose";
interface iUser {
  message: string;
  image: string;
  imageID: string;
  user: {};
  like: Array<string>;
}

interface iPostData extends iUser, Document {}

const postModel = new Schema<iPostData>(
  {
    message: {
      type: String,
    },
    image: {
      type: String,
    },
    imageID: {
      type: String,
    },
    user: {
      type: Types.ObjectId,
      ref: "users",
    },
    like: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPostData>("posts", postModel);
