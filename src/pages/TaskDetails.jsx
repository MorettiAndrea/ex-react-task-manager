// react import
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

// components import
import paths from "../assets/data/paths";
import { useTaskContext } from "../components/contexts/TasksContext";
import TaskDeleteModal from "../components/modals/TaskDeleteModal";

export default function TaskDetails() {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, removeTask } = useTaskContext();

  const targetTask = tasks.find((t) => t.id === parseInt(id));

  // funzione mostra modale

  const handleShowModal = (e) => {
    setShowModal(true);
  };

  // funzione tasto annulla

  const handleOnClose = () => {
    setShowModal(false);
  };
  // funzione per eliminare

  const handleOnConfirm = async () => {
    try {
      await removeTask(targetTask.id);
      alert(
        "Task rimossa con successo! Clicca per tornare alla pagina dei tasks"
      );
      navigate(paths.TaskList);
    } catch (err) {
      alert("errore durante l'eliminazione del task");
      console.error(err);
    }
  };

  return !targetTask ? (
    <h1 className="text-center text-danger mt-5">Task non trovato!</h1>
  ) : (
    <>
      <div className="container mt-5" style={{ maxWidth: "600px" }}>
        <h1 className="mb-3 text-center">{targetTask.title}</h1>
        <p className="lead">{targetTask.description}</p>
        <p>
          <strong>Status: </strong> {targetTask.status}
        </p>
        <p>
          <strong>Data creazione: </strong>{" "}
          {new Date(targetTask.createdAt).toLocaleDateString()}
        </p>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-success btn-lg" onClick={handleShowModal}>
            Elimina Task
          </button>
        </div>
      </div>

      <TaskDeleteModal
        title="Conferma eliminazione del task"
        content="Sei sicuro di voler eliminare questo task?"
        show={showModal}
        onClose={handleOnClose}
        onConfirm={handleOnConfirm}
        confirmText="Conferma"
      />
    </>
  );
}
