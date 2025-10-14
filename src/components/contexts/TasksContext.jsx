import { createContext, useContext, useState, useEffect } from "react";
import useTasks from "../custom-hooks/UseTasks";

const TasksContext = createContext();
const useTaskContext = () => {
  return useContext(TasksContext);
};

function TasksProvider({ children }) {
  const { tasks, setTasks, addTask, removeTask, updateTask } = useTasks();
  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, addTask, removeTask, updateTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}
export { TasksProvider, useTaskContext };
