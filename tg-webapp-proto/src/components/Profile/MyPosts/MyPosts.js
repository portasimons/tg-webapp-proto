import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <Post message='Enjoying sun beams' likes='6' image='https://storage-api.petstory.ru/resize/1000x1000x80/ec/d8/0b/ecd80bf6e6e049a79dc0557af65163f8.jpeg'/>
            <Post message='Me and the boys' likes='6' image='https://opis-cdn.tinkoffjournal.ru/mercury/image1_samoed.rnfe0cvg7vbj.jpg'/>
            <Post message='On my way to vacation. See ya!' likes='6' image='https://external-preview.redd.it/g-V-aWS125HJp5k35Z1GD5dxo858DPyew9tIylC6TrE.jpg?auto=webp&s=7e450cbf732023ef916bcf0bfa0d99077c6ffa8f'/>
        </div>
    )
}

export default MyPosts
