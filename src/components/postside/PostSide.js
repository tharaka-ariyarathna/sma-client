import React from 'react'
import PostShare from '../postShare/PostShare' ;
import NewsFeed from '../newsFeed/NewsFeed' ;
import './PostSide.css' ;

const PostSide = () => {
  return (
    <div className='postSide'>
        <PostShare />
        <NewsFeed />
    </div>
  )
}

export default PostSide