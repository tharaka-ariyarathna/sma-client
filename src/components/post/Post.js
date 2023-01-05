import React, { useState } from "react";
import "./Post.css";
import Like from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import {useSelector} from 'react-redux' ;

const Post = ({ data }) => {
  const {user} = useSelector(state => state.Authreducer.authData.data) ;

  //const [liked, setLiked] = useState(data)
  console.log(data) ;

  return (
    <div className="post">
      {data.image && (
        <img src={data.image_url} />
      )} 

      <div className="postReact">
        <img src={data.liked ? Like : NotLike} />
        <img src={Comment} />
        <img src={Share} />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes} likes
      </span>

      <div className="details">
        <span>
          <b>{data.name}&nbsp;&nbsp;&nbsp;</b>
        </span>
        <span>{data.description}</span>
      </div>
    </div>
  );
};

export default Post;
