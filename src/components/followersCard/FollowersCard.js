import React, { useEffect, useState } from "react";
import { followers } from '../../data/FolloersData';
import User from "../user/user";
import { useSelector } from "react-redux";
import "./FollowersCard.css";
import { getAllUsers } from "../../api/UserApi";

const FollowersCard = () => {
  const {user} = useSelector((state) => state.Authreducer.authData.data);
  const [data, setData] = useState({}) ;

  useEffect(() => {
    const fetchData = async() => {
      const {data} = await getAllUsers() ;
      setData(data.data) ;
    }
    fetchData() ;
  },[])

  return (
    <div className="followersCard">
      <h3>People You May Know</h3>
      {followers.map((person, id) => {
        return <User person={person} key={id} />;
      })}
    </div>
  );
};

export default FollowersCard;
