import React from "react";
import p from './post.module.css'

const Post = (props) => {
    return (
      <div>
        <img className={p.avatar} src='https://i.yapx.ru/Ra8I0.jpg'/>
        <span>{props.message}</span>
        <div>
          <span>{props.count}</span><button>Like</button>
          <button>Dislike</button>
        </div>
      </div>

    );
}

export default Post;