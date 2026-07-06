import './newPostModal.css';
import { useState } from 'react';

interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;

  onPublish: (title: string, content: string) => void;
}

const NewPostModal = ({ isOpen, onClose, onPublish }: NewPostModalProps) => {
  // ---------------usestate--------
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // resent function
  const resetForm = () => {
    setTitle('');
    setContent('');
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };
 

  const handlePublish = () => {
 if (!title.trim() || !content.trim()) {
    alert('Please fill in both Title and Content.');
    return;
  }

    onPublish(title, content);
    resetForm();
  };
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Post</h2>

          <button className="close-btn" onClick={handleCancel}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog here..."
            ></textarea>
          </div>
        </div>

        {/* ----puclish button

*/}

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>

          <button className="publish-btn" onClick={handlePublish}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;
