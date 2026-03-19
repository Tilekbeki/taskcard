import { Task, TaskPriority } from "@/types/task.types";
import { useState } from "react";
import { TaskStatus } from "@/types/task.types";
import "./TaskCard.css";

interface TaskCardProps {
  task: Task;
}

const priorityClasses: Record<TaskPriority, string> = {
  high: "task-priority--high",
  medium: "task-priority--medium",
  low: "task-priority--low",
};

const statusClasses: Record<TaskStatus, string> = {
  todo: "task-status--todo",
  "in-progress": "task-status--in-progress",
  done: "task-status--done",
};

const TaskCard = ({ task }: TaskCardProps) => {
  const [status, setStatus] = useState<TaskStatus>(task.status);

  const onHandleStatusChange = () => {
    setStatus((prevStatus) => {
      if (prevStatus === "todo") {
        return "in-progress";
      } else if (prevStatus === "in-progress") {
        return "done";
      } else {
        return "todo";
      }
    });
  };

  return (
    <div className="task-card">
      <div className="task-card__title">{task.title}</div>
      <div className="task-card__short-info">
        <span className={`task-priority ${priorityClasses[task.priority]}`}>
          {task.priority}
        </span>
        <span className={`task-status ${statusClasses[status]}`}>{status}</span>
      </div>
      <div className="task-card__descr">{task.description}</div>

      <button
        className="task-card__button"
        onClick={onHandleStatusChange}
        disabled={status === "done"}
      >
        Next status
      </button>
    </div>
  );
};

export default TaskCard;
