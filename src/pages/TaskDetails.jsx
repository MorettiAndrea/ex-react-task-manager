import { useParams } from "react-router-dom";
import useTasks from "../components/custom-hooks/UseTasks";

export default function TaskDetails() {
  const { id } = useParams();
  const { tasks } = useTasks();

  const targetTask = tasks.find((t) => t.id === parseInt(id));

  const handleOnCLick = () => {
    console.log(targetTask);
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
