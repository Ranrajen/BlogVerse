import './newPostModal.css';
import { useState } from 'react';

interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewPostModal = ({ isOpen, onClose }: NewPostModalProps) => {

  
  // ---------------usestate--------
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  if (!isOpen) return null;


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Create New Post</h2>

          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
         <div className='form-group'>
          <label htmlFor="title">Title</label>
           <input
           
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
         </div>

         <div className='form-group'>
          <label htmlFor="content">Content</label>
           <textarea
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog here..."
          ></textarea>
         </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;
