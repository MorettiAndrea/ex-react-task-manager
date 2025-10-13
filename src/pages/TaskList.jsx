import { useTasks } from "../components/contexts/TasksContext";
import TaskRow from "../components/tables/TaskRow";

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <>
      <div className="container">
        <div className="row">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Stato</th>
                <th>Descrizione</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <TaskRow key={task.id} prop={task} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
