import { ChangeEvent, useEffect, useState } from "react";
import publicAxios from "../config/publicAxios";
interface ObjToDo {
  id: number;
  title: string;
  status: boolean;
}

const ToDoList = () => {
  const [allTodo, setAllTodo] = useState<ObjToDo[]>([]);
  useEffect(() => {
    listTodo();
  }, []);

  const listTodo = async () => {
    try {
      const res = await publicAxios.get("/todo");
      setAllTodo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [newToDo, setNewToDo] = useState<ObjToDo>({
    id: Math.floor(Math.random() * 1000),
    title: "",
    status: false,
  });
  const handleTakeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewToDo({
      ...newToDo,
      [name]: value,
    });
  };
  const handleSendValue = async () => {
    try {
      await publicAxios.post("/todo", newToDo);
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <>
      <div>
        <div className='bg-main'>
          <div
            className='content'
            style={{
              backgroundColor: "#ef5367",
              color: "white",
              width: "50%",
            }}>
            {" "}
            <div>
              <div style={{ textAlign: "center" }}>
                {" "}
                <h1 style={{ textAlign: "center" }}>ToDoList</h1>
                <p>Get things done, one item at a time</p>
              </div>
              <hr />
            </div>
            <div
              style={{
                padding: "10px",
                backgroundColor: "#ffffff33",
                display: "flex",
                justifyContent: "space-evenly",
              }}>
              <span>hello world</span>
              <div>
                {" "}
                <input type='checkbox' />
                <span>xoa</span>
              </div>
            </div>
            <div style={{ textAlign: "center", padding: "10px" }}>
              <span>move done items at the end?</span>
              <button>click</button>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "30px",
                left: "25%",
              }}>
              <div>
                {" "}
                <span>Add To Do List</span>
                <input
                  type='text'
                  style={{ padding: "10px" }}
                  onChange={handleTakeValue}
                  name='title'
                  value={newToDo.title}
                />
                <button style={{ padding: "10px" }} onClick={handleSendValue}>
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
