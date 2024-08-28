import dotenv from "dotenv";
import connectDb from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});


const PORT = process.env.PORT || 8000

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server Started at port:", PORT);
    });
  })
  .catch((err) => {
    console.log("MongoDb Connection Error", err);
  });
