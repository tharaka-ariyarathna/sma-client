import React from "react";
import PostShare from "../postShare/PostShare";
import NewsFeed from "../newsFeed/NewsFeed";
import "./PostSide.css";

const PostSide = ({location}) => {
  return (
    <div className="postSide">
      <PostShare location={location}/>
      <NewsFeed location={location}/>
    </div>
  );
};

export default PostSide;
