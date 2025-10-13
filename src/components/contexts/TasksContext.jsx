import { createContext, useContext, useState, useEffect } from "react";

const TasksContext = createContext();
const useTasks = () => {
  return useContext(TasksContext);
};

function TasksProvider({ children }) {
  const [tasks, SetTasks] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    fetch(`${backendUrl}/tasks`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        SetTasks(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, SetTasks }}>
      {children}
    </TasksContext.Provider>
  );
}
export { TasksProvider, useTasks };
