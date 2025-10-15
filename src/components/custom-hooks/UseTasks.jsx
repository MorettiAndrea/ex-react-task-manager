import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    }
  };

  const removeTask = async (taskId) => {
    try {
      const deleteTask = await fetch(`${backendUrl}/tasks/${taskId}`, {
        method: "DELETE",
      });
      const data = await deleteTask.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
    } catch (error) {
      alert(`Errore: ${error.message}`);
      console.error(error);
    }
  };

  const updateTask = async (currentTask) => {
    try {
      const modifyTask = await fetch(`${backendUrl}/tasks/${currentTask.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentTask),
      });

      const data = await modifyTask.json();
      if (!data.success) {
        throw new Error(data.message);
      }
      setTasks((prev) =>
        prev.map((t) => (t.id === currentTask.id ? data.task : t))
      );
    } catch (err) {
      alert(`errore nella modifica della task: ${err.message}`);
      console.error(err);
    }
  };
  return { tasks, setTasks, addTask, removeTask, updateTask };
}
