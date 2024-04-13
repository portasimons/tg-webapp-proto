import s from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div className={s.profileContainer}>
            <div className={s.picBackground}>
                <img className={s.pic} alt="good boy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTl-dk_1ClaPOrcLAUjjNGHt_D2uMcpnJarvXob0phHw&s">
                </img>
            </div>
            <div className={s.name}>Charlie, the Dogg</div>
            <div className={s.bio}>10 y.o. professional good boy</div>
        </div>
    )
}

export default ProfileInfo