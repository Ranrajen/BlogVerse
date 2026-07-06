import './newPostModal.css'

interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewPostModal = ({
  isOpen,
  onClose,
}: NewPostModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e)=> e.stopPropagation()}>

        <div className="modal-header">
          <h2>Create New Post</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="modal-body">

          <p>
            Form coming in the next sprint...
          </p>

        </div>

      </div>
    </div>
  );
};

export default NewPostModal;