import React from "react";
import p from './posts.module.css'
import MyPost from './MyPost/myPost'
import Post from './Post/post'


const Posts = () => {
    return (
      <div>
        <MyPost/>
        <Post message="Hello/ My friends" count="5"/>
        <Post message="How are you?" count="14"/>
      </div>
    );
}

export default Posts;