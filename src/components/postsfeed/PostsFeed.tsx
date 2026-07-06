import './postFeeds.css'
// import { dummyPosts } from '../../data/dummyPosts'
import { Postcard } from '../postcard/PostCard'
import type { Post } from '../../types/Post'

interface PostsFeedProps {
  posts : Post[];
  onSelectPost : (post :Post)=> void;
    onDeletePost: (id: string) => void;
}

const PostsFeed = ({posts, onSelectPost  , onDeletePost}: PostsFeedProps) => {
  return (
    <section className='post-feed'>
        <h2>POSTS</h2>
       {posts.map((post)=>(<Postcard key={post.id} post={post} onSelect={onSelectPost} onDelete={onDeletePost}/>))} 
       {/* here post var */}
    </section>
  )
}

export default PostsFeed