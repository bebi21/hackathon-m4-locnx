import { Request, Response } from "express";
import {
  addTodos,
  deleteTodo,
  renderTodo,
  updateTodo,
} from "../repository/todolist.repository";

export const addNewToDo = async (req: Request, res: Response) => {
  const { title } = req.body;
  await addTodos(title);
  res.status(201).json({
    message: "Admin them thanh cong",
  });
};

export const render = async (req: Request, res: Response) => {
  const result = await renderTodo();
  res.status(200).json(result);
};
export const removeTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteTodo(+id);
  const result = await renderTodo();
  res.status(200).json(result);
};
export const updateTodo1 = async (req: Request, res: Response) => {
  // console.log(req.params.id);
  const { id } = req.params;
  const { title } = req.body;
  const result = await updateTodo(title, +id);
  console.log(result);
  res.status(200).json(result);
};
