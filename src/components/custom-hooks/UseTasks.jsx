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
  const addTask = async (newTask) => {
    const postTasks = await fetch(`${backendUrl}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
    const data = await postTasks.json();

    if (!data.success) {
      alert(data.message);
      throw new Error(data.message);
    } else {
      setTasks((prev) => [...prev, data.task]);
      alert("Task aggiunta con successo!");
    }
  };
  const removeTask = () => {};
  const updateTask = () => {};
  return { tasks, setTasks, addTask, removeTask, updateTask };
}
