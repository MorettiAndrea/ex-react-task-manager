import { useTasks } from "../components/contexts/TasksContext";
import TaskRow from "../components/tables/TaskRow";

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista dei Task</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center">
          <thead className="table-light">
            <tr>
              <th>Nome</th>
              <th>Stato</th>
              <th>Descrizione</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
