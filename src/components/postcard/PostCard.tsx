import './postCard.css';
import type { Post } from '../../types/Post';
interface PostCardPost {
  post: Post;
}

export const Postcard = ({ post }: PostCardPost) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p className='post-author'>
        {post.author} * {post.createdAt}
      </p>
      <p className='post-category'>{post.category}</p>
    </div>
  );
};
