import './postFeeds.css'
import { dummyPosts } from '../../data/dummyPosts'
import { Postcard } from '../postcard/PostCard'
import type { Post } from '../../types/Post'

interface PostFeedProps {
  onSelectPost : (post :Post)=> void;
}

const PostsFeed = ({onSelectPost }: PostFeedProps) => {
  return (
    <section className='post-feed'>
        <h2>POSTS</h2>
       {dummyPosts.map((post)=>(<Postcard key={post.id} post={post} onSelect={onSelectPost}/>))} 
       {/* here post var */}
    </section>
  )
}

export default PostsFeed