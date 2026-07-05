import './postFeeds.css'
import { dummyPosts } from '../../data/dummyPosts'
import { Postcard } from '../postcard/PostCard'

const PostsFeed = () => {
  return (
    <section className='post-feed'>
        <h2>POSTS</h2>
       {dummyPosts.map((post)=>(<Postcard key={post.id} post={post}/>))} 
       {/* here post var */}
    </section>
  )
}

export default PostsFeed