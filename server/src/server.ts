import express, { Express } from "express";
import bodyParser from "body-parser";
import todoRouter from "./router/todolist.router";
import cors from "cors";
const app: Express = express();
require("dotenv").config();
//Set up
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Su dung router
todoRouter(app);
app.listen(8000, () => {
  console.log(`Listening on port 8000`);
});
