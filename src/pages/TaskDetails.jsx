import { useParams, useNavigate } from "react-router-dom";
import { useTaskContext } from "../components/contexts/TasksContext";
import paths from "../assets/data/paths";

export default function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, removeTask } = useTaskContext();

  const targetTask = tasks.find((t) => t.id === parseInt(id));

  const handleOnCLick = async () => {
    await removeTask(targetTask.id);
    alert("Task rimossa con successo!Clicca per tornare alla pagina dei tasks");
    navigate(paths.TaskList);
  };

  return !targetTask ? (
    <h1 className="text-center text-danger">Task non trovato!</h1>
  ) : (
    <div>
      <h1>{targetTask.title}</h1>
      <p>{targetTask.description}</p>
      <p>{targetTask.status}</p>
      <p>{new Date(targetTask.createdAt).toLocaleDateString()}</p>
      <button onClick={handleOnCLick}>Elimina Task</button>
    </div>
  );
}
