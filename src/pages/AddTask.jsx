import { useTaskContext } from "../components/contexts/TasksContext";
import { useState, useRef } from "react";

export default function Addtask() {
  const { tasks, setTasks, addTask, removeTask, updateTask } = useTaskContext();
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

  //  campo controllato
  const [newTaskTitle, setNewTaskTitle] = useState("");

  //  campi non controllati

  const descriptionRef = useRef();
  const statusRef = useRef();

  //   funzioni del form
  const handleOnChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  //   controllo errori

  const errors =
    !newTaskTitle ||
    newTaskTitle.split("").some((char) => symbols.includes(char));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors) {
      alert("Caratteri speciali non consentiti");
      return;
    }

    const description = descriptionRef.current.value.trim();
    const status = statusRef.current.value.trim();

    const newTask = {
      title: newTaskTitle,
      status: status,
      description: description,
    };

    try {
      console.log(tasks);

      await addTask(newTask);
      setNewTaskTitle("");
      descriptionRef.current.value = "";
      statusRef.current.value = "To do";
    } catch (error) {
      alert("Errore durante la creazione del task: ", error);
    }
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Aggiungi un nuovo Task</h2>

      <form onSubmit={handleSubmit} className="row g-4">
        <div className="col-md-6 offset-md-3">
          <label htmlFor="title" className="form-label">
            Titolo Task
          </label>
          <p className={errors ? "text-danger" : "text-success"}>
            {errors ? "Compila questo campo" : "Nome inserito correttamente"}
          </p>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            placeholder="Inserisci il titolo del task"
            value={newTaskTitle}
            onChange={handleOnChange}
          />
        </div>

        <div className="col-md-6 offset-md-3">
          <label htmlFor="status" className="form-label">
            Stato
          </label>
          <select id="status" className="form-select" ref={statusRef} required>
            <option required value="To do">
              To do
            </option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <div className="col-md-6 offset-md-3">
          <label htmlFor="description" className="form-label">
            Descrizione
          </label>
          <textarea
            id="description"
            className="form-control"
            rows="3"
            placeholder="Inserisci una descrizione"
            ref={descriptionRef}
          ></textarea>
        </div>

        <div className="col-12 text-center">
          <button
            type="submit"
            className={
              errors
                ? "btn btn-primary mt-3 bg-danger"
                : "btn btn-primary mt-3 bg-success"
            }
            disabled={errors}
          >
            {errors ? "Compila i campi" : "Conferma"}
          </button>
        </div>
      </form>
    </div>
  );
}
