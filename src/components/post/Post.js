import React, { useState } from "react";
import "./Post.css";
import Like from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostApi";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.Authreducer.authData.data);

  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    setLiked(prev => !prev) ;
    likePost(data._id, user._id) ;
    liked? setLikes(prev => prev-1) : setLikes(prev => prev+1) ;
  }

  return (
    <div className="post">
      {data.image && <img src={data.image_url} />}

      <div className="postReact">
        <img src={liked ? Like : NotLike} onClick={handleLike}/>
        <img src={Comment} />
        <img src={Share} />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
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
