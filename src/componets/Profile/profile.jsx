import React from "react";
import Banner from "./Banner/banner";
import AvaDesc from "./AvaDesc/avadesc";
import Posts from "./Posts/posts";

const Profile = (props) => {
    return (
      <div>
        <Banner/>
        <AvaDesc/>
        <Posts profilePage={props.profilePage} 
               addPost={props.addPost}
               updateTextArea={props.updateTextArea}/>
      </div>

    );
}

export default Profile;