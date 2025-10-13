import { createContext, useContext, useState, useEffect } from "react";

const TasksContext = createContext();
const useTasks = () => {
  return useContext(TasksContext);
};

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    fetch(`${backendUrl}/tasks`)
      .then((res) => res.json())
      .then((res) => {
        setTasks(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
}
export { TasksProvider, useTasks };
