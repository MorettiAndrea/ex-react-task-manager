import { useEffect, useState } from "react";

export default function useTasks() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/tasks`)
      .then((res) => res.json())
      .then((res) => setTasks(res))
      .catch((err) => console.error(err));
  }, []);
  const addTask = () => {};
  const removeTask = () => {};
  const updateTask = () => {};
  return { tasks, setTasks, addTask, removeTask, updateTask };
}
