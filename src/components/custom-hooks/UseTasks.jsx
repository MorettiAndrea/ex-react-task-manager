import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useTasks() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [tasks, setTasks] = useState([]);

  const { id } = useParams();

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
  //   Completare la funzione removeTask in useTasks():
  // La funzione deve ricevere un taskId e effettuare una chiamata API DELETE /tasks/:id.

  // La chiamata API restituisce un oggetto con la seguente struttura:

  // In caso di successo:

  // { success: true }
  // In caso di errore:

  // { success: false, message: "Messaggio di errore" }
  // La funzione removeTask deve controllare il valore di success nella risposta:

  // Se success è true, rimuovere il task dallo stato globale.
  // Se success è false, lanciare un errore con message come testo. -->

  const removeTask = async (taskId) => {
    fetch(`${backendUrl}/task/${id}`);
  };
  const updateTask = () => {};
  return { tasks, setTasks, addTask, removeTask, updateTask };
}
