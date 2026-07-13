import './newPostModal.css';
import type { Post } from '../../types/Post';
import { useState ,useEffect } from 'react';

interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;

  onPublish: (title: string, content: string , postId ? :string) => void;
  mode: "create" | "edit";
  post: Post | null 
}

const NewPostModal = ({ isOpen, onClose, onPublish, mode , post }: NewPostModalProps) => {
  // ---------------usestate--------
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // useeffecct for the 


// update local form state when modal opens or when editing a different post
// eslint-disable-next-line react-hooks/set-state-in-effect
useEffect(() => {
  if (mode === "edit" && post) {
    setTitle(post.title);
    setContent(post.content);
  }

  if (mode === "create") {
    setTitle('');
    setContent('');
  }
}, [mode, post, isOpen]);

  // resent function
  const resetForm = () => {
    setTitle('');
    setContent('');
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };
 

  // seprate the validation, publish , cleanup
  const handlePublish = () => {
 if (!title.trim() || !content.trim()) {
    alert('Please fill in both Title and Content.');
    return;
  }


  if(mode==="edit" && post)
  {
    onPublish(title , content, post.id);
  }
  else {
     onPublish(title, content);
  }
    // onPublish(title, content);
    resetForm();
    onClose();
  };
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{
mode === "create" ? "Create New Post": "Edit Post"}
</h2>

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
            {mode === "create"
    ? "Publish"
    : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;
