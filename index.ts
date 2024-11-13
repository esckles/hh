import express, { Application } from "express";
import cors from "cors";
import env from "dotenv";
env.config();

const app: Application = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {});
