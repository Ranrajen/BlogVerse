import './postFeeds.css'
// import { dummyPosts } from '../../data/dummyPosts'
import { Postcard } from '../postcard/PostCard'
import type { Post } from '../../types/Post'

interface PostsFeedProps {
  posts : Post[];
  onSelectPost : (post :Post)=> void;
}

const PostsFeed = ({posts, onSelectPost }: PostsFeedProps) => {
  return (
    <section className='post-feed'>
        <h2>POSTS</h2>
       {posts.map((post)=>(<Postcard key={post.id} post={post} onSelect={onSelectPost}/>))} 
       {/* here post var */}
    </section>
  )
}

export default PostsFeed