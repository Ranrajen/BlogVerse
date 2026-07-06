import './postCard.css';
import type { Post } from '../../types/Post';
interface PostCardPost {
  post: Post;
  onSelect : (post : Post )=> void
}

export const Postcard = ({ post , onSelect }: PostCardPost) => {
  return (
    <div className="post-card" onClick={()=> onSelect(post)}>
      <h3>{post.title}</h3>
      <p className='post-author'>
        {post.author} * {post.createdAt}
      </p>
      <p className='post-category'>{post.category}</p>
    </div>
  );
};
