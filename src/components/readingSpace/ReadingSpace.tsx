import './readingSpace.css';
import type { Post } from '../../types/Post';

interface ReadingSpaceProps {
  selectedPost: Post | null;
}

const ReadingSpace = ({ selectedPost }: ReadingSpaceProps) => {
  return (
    <section className="reading-space">
      <div className="reading-header">
        <h2>READING SPACE</h2>
      </div>
      {selectedPost ? (
        <div className="post-content">
          <h1>{selectedPost.title}</h1>

          <p className="post-meta">
            {selectedPost.author} • {selectedPost.createdAt}
          </p>

          <p className="post-category">Category: {selectedPost.category}</p>

          <hr />

          <p>{selectedPost.content}</p>
        </div>
      ) : (
        <div className="empty-state">
          <div className="book-icon">📖</div>

          <h3>No Post Selected</h3>

          <p>Select any post from the feed to read its complete content.</p>
        </div>
      )}
    </section>
  );
};

export default ReadingSpace;
