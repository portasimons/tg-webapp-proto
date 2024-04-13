import s from './Post.module.css'

function Post(props) {
    return (
        <div className={s.post}>
            <div className={s.img}>
                <img alt="Post pic" src={props.image}></img>
            </div>
            <div className={s.description}>
                <div>
                    <p className={s.text}>{props.message}</p>
                </div>
                <div>
                    <p className={s.reactions}>Likes: {props.likes}</p>
                </div>
            </div>
        </div>
    )
}

export default Post
