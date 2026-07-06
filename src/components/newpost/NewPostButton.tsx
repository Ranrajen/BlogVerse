import './newPostButton.css';

interface NewPostButtonProps {
  onClick: () => void;
}

const NewPostButton = ({ onClick }: NewPostButtonProps) => {
  return (
    <button className="new-add-btn" onClick={onClick}>
      + New Post{' '}
    </button>
  );
};

export default NewPostButton;
