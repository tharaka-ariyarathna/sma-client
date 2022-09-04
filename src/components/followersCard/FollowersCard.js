import React from 'react' ;
import { followers } from '../../data/FolloersData';
import './FollowersCard.css' ;

const FollowersCard = () => {
    return(
        <div className='followersCard'>
            <h3>Who is following you</h3>

            {followers.map((follower, id) => {
                return(
                    <div className='follower'>
                        <div>
                            <img className='followerImage' src={follower.image} alt={follower.name} />
                            <div className='followerName'>
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className='button fc-button'>
                            Follow
                        </button>
                    </div>
                ) ;
            })}
        </div>
    ) ;
}

export default FollowersCard ;