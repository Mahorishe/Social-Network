import React from "react";
import p from './myPost.module.css'

let newPostElement = React.createRef();



const MyPost = (props) => {
  debugger;
  let addPost = () => {
    props.addPost();
  }
  let updatePost = () => {
    let text = newPostElement.current.value;
    props.updateTextArea(text);
  }
    return (
      <div>
        <textarea
          onChange={updatePost}
          ref={newPostElement}
          value={props.newPostText} />
        <button onClick={addPost}>Add Post</button>
      </div>
    );
}

export default MyPost;