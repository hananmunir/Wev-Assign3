import createHttpError from "http-errors";
import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.js";
//var indexRouter = require("./routes/index");

const PORT = process.env.PORT || 8800;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log("Server is running on port 8800");
});
