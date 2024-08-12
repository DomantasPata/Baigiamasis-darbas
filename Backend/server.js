import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/participantRouter.js";

dotenv.config();

const { MONGO_URI, PORT } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "Event" })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
