import s from './ProfileInfo.module.css'

function ProfileInfo(props) {
    let profileInfo = props.profileInfo;

    return (
        <div className={s.profileContainer}>
            <div className={s.picBackground}>
                <img className={s.pic} alt={profileInfo.alt} src={profileInfo.src}></img>
            </div>
            <div className={s.name}>{profileInfo.name}</div>
            <div className={s.bio}>{profileInfo.bio}</div>
        </div>
    )
}

export default ProfileInfo