import './postFeeds.css'
// import { dummyPosts } from '../../data/dummyPosts'
import { Postcard } from '../postcard/PostCard'
import type { Post } from '../../types/Post'

interface PostsFeedProps {
  posts : Post[];
  onSelectPost : (post :Post)=> void;
    onDeletePost: (id: string) => void;
     onEditPost: (post: Post) => void;
}

const PostsFeed = ({posts, onSelectPost  , onDeletePost , onEditPost,}: PostsFeedProps) => {
  return (
    <section className='post-feed'>
        <h2>POSTS</h2>
          {posts.length === 0 ? (
    <div className="empty-state">
      <h3>📭 No posts found</h3>
      <p>Create your first post or try another search.</p>
    </div>
  ) : (
    posts.map((post) => (
      <Postcard
        key={post.id}
        post={post}
        onSelect={onSelectPost}
        onDelete={onDeletePost}
        onEdit={onEditPost}
      />
    ))
  )}
       {posts.map((post)=>(<Postcard key={post.id} post={post} onSelect={onSelectPost} onDelete={onDeletePost} onEdit={onEditPost}/>))} 
       {/* here post var */}
    </section>
  )
}

export default PostsFeed