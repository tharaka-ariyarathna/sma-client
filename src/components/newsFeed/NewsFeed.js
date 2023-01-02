import React from "react";
import Post from "../post/Post";
import { PostsData } from "../../data/PostData";
import "./NewsFeed.css";

const NewsFeed = () => {
  return (
    <div className="newsFeed">
      {PostsData.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default NewsFeed;
