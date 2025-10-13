// react import

import { BrowserRouter, Routes, Route } from "react-router-dom";

// componenti

// pagine

import HomePage from "./pages/HomePage";
import Addtask from "./pages/AddTask";
import TaskList from "./pages/TaskList";

// altri import
import DefaultLayout from "./components/layout-components/DefaultLayout";

import paths from "./assets/data/paths";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path={paths.HomePage} element={<HomePage />} />
            <Route path={paths.AddTask} element={<Addtask />} />
            <Route path={paths.TaskList} element={<TaskList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
