import React, { useState } from 'react' ;
import Home from '../../img/home.png' ;
import Comment from '../../img/comment.png' ;
import Notification from '../../img/noti.png' ;
import {UilSetting} from '@iconscout/react-unicons' ;
import TrendCard from '../trendCard/TrendCard' ;
import ShareModal from '../shareModal/ShareModal' ;
import './RightSide.css' ;

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false) ;

  return (
    <div className='rightSide'>
        <div className='navIcons'>
            <img src={Home} />
            <UilSetting />
            <img src={Notification} />
            <img src={Comment} />
        </div>
        
        <TrendCard />

        <button className='button r-button' onClick={() => setModalOpened(true)}>Share</button>
        <ShareModal 
              modalOpened={modalOpened} 
              setModalOpened={setModalOpened} 
            />
    </div>
  )
}

export default RightSide