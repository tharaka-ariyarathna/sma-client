import React, { useState } from 'react' ;
import {UilPen} from '@iconscout/react-unicons' ;
import ProfileModal from '../profileModal/ProfileModal';
import './InfoCard.css' ;

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false) ;
  console.log(modalOpened) ;

  return (
    <div className='infocard'>
        <div className='infoHead'>
          <h4>Your Info</h4>
          <div>
              <UilPen width='2rem' height='1.2rem'onClick={() =>setModalOpened(true)}/>
              <ProfileModal 
                modalOpened= {modalOpened} 
                setModalOpened={setModalOpened}
              />
          </div>
        </div>

        <div className='info'>
            <span><b>Status</b></span>
            <span>&nbsp;&nbsp; Single</span>
        </div>

        <div className='info'>
            <span><b>Lives in</b></span>
            <span>&nbsp;&nbsp; Dublin</span>
        </div>

        <div className='info'>
            <span><b>Works at</b></span>
            <span>&nbsp;&nbsp; Dublin harbour</span>
        </div>

        <button className='button lo-button'>Log Out</button>
    </div>
  )
}

export default InfoCard