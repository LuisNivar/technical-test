import { useState } from "react";
import { TaskType } from "../App";

export function useTasks() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function AddTask(text: TaskType["text"]) {
    const newTask = { id: crypto.randomUUID(), text };
    setTasks((prevState) => [...prevState, newTask]);
  }

  function RemoveTask(id: TaskType["id"]) {
    setTasks((prevState) => {
      return prevState.filter((task) => task.id !== id);
    });
  }

  return { tasks, AddTask, RemoveTask };
}
