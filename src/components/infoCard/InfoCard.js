import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../profileModal/ProfileModal";
import * as UserApi from "../../api/UserApi";
import { logOut } from "../../actions/AuthActions";
import "./InfoCard.css";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [profileUser, setProfileUser] = useState({});

  const dispatch = useDispatch();
  const params = useParams();

  const userId = params.id;

  const { user } = useSelector((state) => state.Authreducer.authData.data);

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (userId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(userId);
        setProfileUser(profileUser.data);
      }
    };

    fetchProfileUser();
  }, [user]);

  const handleLogOut = () => {
    dispatch(logOut()) ;
  }

  return (
    <div className="infocard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {profileUser._id === user._id ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      {profileUser.relationShip ? (
        <div className="info">
          <span>
            <b>Status</b>
          </span>
          <span>&nbsp;&nbsp; {profileUser.relationShip}</span>
        </div>
      ) : (
        ""
      )}
      {profileUser.livesIn ? (
        <div className="info">
          <span>
            <b>Lives in</b>
          </span>
          <span>&nbsp;&nbsp; {profileUser.livesIn}</span>
        </div>
      ) : (
        ""
      )}
      {profileUser.worksAt ? (
        <div className="info">
          <span>
            <b>Works at</b>
          </span>
          <span>&nbsp;&nbsp; Dublin harbour</span>
        </div>
      ) : (
        ""
      )}
      {profileUser._id === user._id ? (
        <button className="button lo-button"  onClick={handleLogOut}>Log Out</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default InfoCard;

/*{profileUser._id===userId || profileUser.relationship || profileUser.livesIn || profileUser.worksAt }*/
