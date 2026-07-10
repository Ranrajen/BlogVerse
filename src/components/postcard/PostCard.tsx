import './postCard.css';
import type { Post } from '../../types/Post';
interface PostCardPost {
  post: Post;
  onSelect : (post : Post )=> void;
  onDelete : (id :string)=> void ;
  onEdit: (post: Post) => void;
}

export const Postcard = ({ post , onSelect ,onDelete, onEdit }: PostCardPost) => {
  return (
    <div className="post-card" onClick={()=> onSelect(post)}>
      <h3>{post.title}</h3>
      <p className='post-author'>
        {post.author} * {post.createdAt}
      </p>
      <p className='post-category'>{post.category}</p>
    <button
  className="delete-btn"
  onClick={(e) => {
    e.stopPropagation();
    onDelete(post.id);
  }}
>
  Delete
</button>
<button
  className="edit-btn"
  onClick={(e) => {
    e.stopPropagation();
    onEdit(post);
  }}
>
  Edit
</button>
    </div>
  );
};
