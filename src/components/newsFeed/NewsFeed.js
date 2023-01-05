import React, { useEffect } from "react";
import Post from "../post/Post";
import {useDispatch, useSelector} from 'react-redux' ;
import { PostsData } from "../../data/PostData";
import "./NewsFeed.css";

const NewsFeed = () => {
  const dispatch = useDispatch() ;
  const {user} = useSelector((state) => state.Authreducer.authData.data  ) ;
  const {posts, loading} = useSelector(state => state.PostReducer) ;

  useEffect(() => {
    dispatch(getTimelinePosts(user._id))
  }, [])

  return (
    <div className="newsFeed">
      {posts.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default NewsFeed;
