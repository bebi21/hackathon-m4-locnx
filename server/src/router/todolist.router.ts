import express, { Express } from "express";
import {
  addNewToDo,
  removeTodo,
  render,
  updateTodo1,
} from "../controller/todolist.controller";

const todoRouter = async (app: Express) => {
  console.log("router");
  app.post("/todo", addNewToDo);
  app.get("/todo", render);
  app.delete("/todo/:id", removeTodo);
  app.put("/todo/:id", updateTodo1);
};
export default todoRouter;
