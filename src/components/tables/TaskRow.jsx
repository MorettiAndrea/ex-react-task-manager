import React from "react";

function TaskRow({ task }) {
  const statusClass =
    task.status === "To do"
      ? "text-danger"
      : task.status === "Doing"
      ? "text-warning"
      : task.status === "Done"
      ? "text-success"
      : "";
  return (
    <tr>
      <td>{task.title}</td>
      <td className={statusClass}>{task.status}</td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  );
}

export default React.memo(TaskRow);
