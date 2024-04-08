import React, { useState } from "react";
import "../styles/followPopup.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileCard = ({ profile }) => {
  const [followBtnState, setFollowBtnState] = useState(() => {
    return profile.following
      ? {
          className: "follow-btn following",
          displayName: "Following",
        }
      : {
          className: "follow-btn not-following",
          displayName: "Follow",
        };
  });
  function changeFollowState() {
    if (followBtnState.displayName === "Following") {
      setFollowBtnState({
        className: "follow-btn not-following",
        displayName: "Follow",
      });
    } else {
      setFollowBtnState({
        className: "follow-btn following",
        displayName: "Following",
      });
    }
  }
  return (
    <div className="profile-card">
      <div className="info">
        <img alt="random-image" src="https://picsum.photos/200/300" />
        <div className="names">
          <span className="username">{profile.name}</span>
          <span className="display-name">{profile.email}</span>
        </div>
      </div>
      <button className={followBtnState.className} onClick={changeFollowState}>
        {followBtnState.displayName}
      </button>
    </div>
  );
};

const FollowPopUp = ({ props }) => {
  const navigate = useNavigate();
  const profileList = useSelector((state) => state.follows[props.stateKey]);
  const closePopup = () => navigate(-1);
  function handleClicks(e) {
    e.stopPropagation();
  }

  return (
    <section className="pop-up-page" onClick={closePopup}>
      <div className="pop-up" onClick={handleClicks}>
        <div className="heading">
          {props.title}
          <span className="material-icons close-btn" onClick={closePopup}>
            close
          </span>
        </div>
        {props.tab && <div className="heading-2">{props.tab}</div>}

        <div className="search-container">
          <span className="material-icons">search</span>
          <input placeholder="Search" />
        </div>
        <section className="profiles-container">
          {profileList &&
            profileList.length > 0 &&
            profileList.map((profile, index) => {
              return <ProfileCard profile={profile} key={index} />;
            })}
        </section>
      </div>
    </section>
  );
};

export default FollowPopUp;
