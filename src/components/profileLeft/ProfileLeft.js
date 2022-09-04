import React from 'react' ;
import FollowersCard from '../followersCard/FollowersCard';
import LogoSearch from '../logo search/LogoSearch';
import InfoCard from '../infoCard/InfoCard' ;
import '../profileside/Profileside.css'

const ProfileLeft = () => {
  return (
    <div className='profileside'>
        <LogoSearch />
        <InfoCard/>
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft