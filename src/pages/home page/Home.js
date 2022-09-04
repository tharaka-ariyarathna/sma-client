import React from 'react' ;
import Profileside from '../../components/profileside/Profileside' ;
import PostSide from '../../components/postside/PostSide' ;
import RightSide from '../../components/rightSide/RightSide';
import './Home.css' ;

const Home = () => {
    return(
        <div className='home'>
            <Profileside />
            <PostSide />
            <RightSide />
        </div>
    ) ;
}

export default Home ;