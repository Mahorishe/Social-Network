import React from "react";
import p from './posts.module.css'
import MyPost from './MyPost/myPost'
import Post from './Post/post'


const Posts = (props) => {
  let postsElement = props.profilePage.posts.map(post=> <Post message={post.message} id={post.id} likeCount={post.likeCount}></Post>)
    return (
      <div>
        <MyPost addPost={props.addPost} 
                newPostText={props.profilePage.newPostText}
                updateTextArea={props.updateTextArea}/>
        <div>
          {postsElement}
        </div>

      </div>
    );
}

export default Posts;