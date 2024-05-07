
import MyPosts from './MyPosts/MyPosts'
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
    let postsData = props.postsData;
    let profileInfo = props.profileInfo;

    return (
        <div>
            <ProfileInfo profileInfo={profileInfo}/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}

export default Profile