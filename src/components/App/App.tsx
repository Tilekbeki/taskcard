import React from "react";
import "./App.css";
import TaskCard from "../TaskCard/TaskCard";
import { Task } from "@/types/task.types";

const task: Task = {
  title: "Настроить авторизацию",
  description: "Реализовать вход по email и паролю с валидацией",
  priority: "high",
  status: "todo",
};

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <TaskCard task={task} />
      </div>
    </div>
  );
}

export default App;
