import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import { getTimelinePosts, getAllUserPosts } from "../../actions/PostActions";
import {useDispatch, useSelector} from 'react-redux' ;
import "./NewsFeed.css";
import { useParams } from "react-router-dom";

const NewsFeed = ({location}) => {
  const dispatch = useDispatch() ;
  const params = useParams() ;
  const{user} = useSelector((state) => state.Authreducer.authData.data  ) ;
  let {posts, loading} = useSelector(state => state.PostReducer) ;
  const profileuser = useSelector(state => state.ProfileReducer.user) ;

  /*if(location==="profilePage"){
    //setPosts(prev =>prev.filter(post => post.userId === user._id))
    //posts = posts.filter(post => post.userId === user._id) ;
    const getPosts = async(id) => {
      const data = await getAllUserPosts(id) ;
      //console.log(data.data.userPosts) ;
      //setPosts(data.data.userPosts) ;
      console.log(posts) ;
      return data ;
    }
    const data = getPosts(user.followings[0]) ;
  }*/

  useEffect(() => {
    if(location==="profilePage"){
      console.log(location) ;
      dispatch(getAllUserPosts(params.id)) ;
    }else{
      dispatch(getTimelinePosts(user._id)) ;
    }
    
  },[profileuser])

  return (
    <div className="newsFeed">
      {posts.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default NewsFeed;
