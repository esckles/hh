import { connect } from "mongoose";

export const dbConfig = async () => {
  try {
    await connect(process.env.MONGO_DB as string).then(() => {
      console.clear();
      console.log("connected successful❤️❤️🚀🚀");
    });
  } catch (error) {
    console.log(error);
    dbConfig();
  }
};
