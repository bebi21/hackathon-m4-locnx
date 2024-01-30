import database from "../config/db.config";

// select ten_cot from ten_bang
async function addTodos(title: string) {
  const [result] = await database.execute(
    "insert into todolist (title) values (?)",
    [title],
  );
  return result;
}
async function renderTodo() {
  const [result] = await database.execute("select * from  todolist");
  console.log(result);
  return result;
}
async function deleteTodo(id: number) {
  const [result] = await database.execute(
    "delete from  todolist where id = ?",
    [id],
  );
  return result;
}
async function updateTodo(title: string, id: number) {
  const [result] = await database.execute(
    "update  todolist set title = ? where id = ?",
    [title, id],
  );
  return result;
}
export { addTodos, renderTodo, deleteTodo, updateTodo };
