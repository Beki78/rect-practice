import { useState } from "react";

const Home = () => {
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState("");

  return (
    <>
      <div className="header">
        <input
          type="text"
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button
          onClick={() => {
            const newToDoList = [...toDoList, task];
            setToDoList(newToDoList);
          }}
        >
          Add task
        </button>
      </div>
      <div>
        {toDoList.map((task) => {
          return (
            <div className="task">
              <h2 className="addedTask">{task}</h2>
              <button onClick={() => {
                
              }}>Del</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
