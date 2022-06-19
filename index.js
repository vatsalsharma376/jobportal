import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import { router as userRouter } from "./routes/users.js";
import { router as companyRouter } from "./routes/company.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/company", companyRouter);

const CONNECTION_URL =
  "mongodb+srv://vatsal:vatsal@zerow.ujvzx.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`App is running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
