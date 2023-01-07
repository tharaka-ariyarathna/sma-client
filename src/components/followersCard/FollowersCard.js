import React, { useEffect, useState } from "react";
import { followers } from '../../data/FolloersData';
import User from "../user/user";
import { useSelector } from "react-redux";
import "./FollowersCard.css";
import { getAllUsers } from "../../api/UserApi";

const FollowersCard = () => {
  const {user} = useSelector((state) => state.Authreducer.authData.data);
  const [people, setPeople] = useState([]) ;

  useEffect(() => {
    const fetchData = async() => {
      const {data} = await getAllUsers() ;
      setPeople(data.data) ;
    }
    fetchData() ;
  },[])

  return (
    <div className="followersCard">
      <h3>People You May Know</h3>
      {people.map((person, id) => {
        if(person._id !== user._id){
          return <User person={person} key={id} user={user}/>
        }
      })}
    </div>
  );
};

export default FollowersCard;
