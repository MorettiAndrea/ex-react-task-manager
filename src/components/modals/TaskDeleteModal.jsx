import ReactDOM from "react-dom";

export default function TaskDeleteModal({
  title,
  content,
  show,
  onClose,
  onConfirm,
  confirmText,
}) {
  if (!show) return null;

  const modalContent = (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        className="modal-dialog modal-sm modal-dialog-centered"
        role="document"
      >
        <div className="modal-content p-3 shadow rounded-4">
          <div className="modal-header border-0">
            <h5 className="modal-title w-100 text-center">{title}</h5>
          </div>
          <div className="modal-body text-center">
            <p className="mb-3">{content}</p>
            <div className="d-flex justify-content-center gap-2">
              <button onClick={onConfirm} className="btn btn-danger btn-sm">
                {confirmText}
              </button>
              <button onClick={onClose} className="btn btn-secondary btn-sm">
                Annulla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root-delete")
  );
}
