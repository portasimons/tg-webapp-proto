import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
    let postsData = props.postsData;
    
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {postsData.map(function(post) {return <Post message={post.message} likes={post.likes} image={post.image} />})}
        </div>
    )
}

export default MyPosts
