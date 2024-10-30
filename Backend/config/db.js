import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(
      "mongodb+srv://gnanendrap:bIvwurqHND0fjBAW@cluster0.rus2v.mongodb.net/online-food-devl"
    )
    .then(() => console.log("Dbconnected"));
};
