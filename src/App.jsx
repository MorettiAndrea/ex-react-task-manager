// react import

import { BrowserRouter, Routes, Route } from "react-router-dom";

// componenti
import { TasksProvider } from "./components/contexts/TasksContext";
import DefaultLayout from "./components/layout-components/DefaultLayout";

// pagine

import HomePage from "./pages/HomePage";
import Addtask from "./pages/AddTask";
import TaskList from "./pages/TaskList";
import TaskDetails from "./pages/TaskDetails";

// altri import

import paths from "./assets/data/paths";

export default function App() {
  return (
    <>
      <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path={paths.HomePage} element={<HomePage />} />
              <Route path={paths.AddTask} element={<Addtask />} />
              <Route path={paths.TaskList} element={<TaskList />} />
              <Route path={paths.TaskDetails} element={<TaskDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </>
  );
}
