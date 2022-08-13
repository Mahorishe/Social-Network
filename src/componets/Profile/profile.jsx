import React from "react";
import Banner from "./Banner/banner";
import AvaDesc from "./AvaDesc/avadesc";
import Posts from "./Posts/posts";
import s from "./profile.module.css";

const Profile = () => {
    return (
      <div>
        <Banner/>
        <AvaDesc/>
        <Posts/>
      </div>

    );
}

export default Profile;