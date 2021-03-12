import React from "react";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;