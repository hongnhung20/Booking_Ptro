import express from "express";
import cors from "cors";
import initRouters from "./src/routers";
import connectDatabase from "./src/config/connectDatabase";
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRouters(app);
connectDatabase();

const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
  console.log(`Sever is running on the port ${listener.address().port}`);
});
