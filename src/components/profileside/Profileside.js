import React from 'react' ;
import LogoSearch from '../logo search/LogoSearch' ;
import ProfileCard from '../profileCard/ProfileCard' ;
import FollowersCard from '../followersCard/FollowersCard' ;
import './Profileside.css' ;

const Profileside = () => {
    return(
        <div className='profileside'>
            <LogoSearch />
            <ProfileCard />
            <FollowersCard />
        </div>
    ) ;
}

export default Profileside ;