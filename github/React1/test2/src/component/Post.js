import React from "react";
const Post = (props) =>{
    console.log(props);
    return (
        <div className = ''>
            <h1 className="post_header">{props.header}</h1>
            <p className="post_content">{props.children}</p>
            <div className="post_likes">{props.likes}</div>
        </div>
    )
};
export default Post;