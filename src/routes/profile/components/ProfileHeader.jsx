import React from "react";
import { Link } from "react-router-dom";
import "../styles/profileHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { followsThunk } from "../redux/followsSlice";

const ProfileHeader = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user);
  function openFollows(event) {
    const triggeredItem = event.target.name;
    dispatch(followsThunk(triggeredItem));
  }
  if (!userInfo) {
    return <h1>Infomation loading...</h1>;
  }
  return (
    <header>
      <div className="profile-img-container">
        <img src="https://picsum.photos/200/300" alt="Random Image" />
      </div>
      <section className="user-info">
        <div className="title">{userInfo.name}</div>
        <ul>
          <li>
            <span>{userInfo.posts} posts</span>
          </li>
          <li>
            <Link to="followers" name="followers" onClick={openFollows}>
              {userInfo.followers} followers
            </Link>
          </li>
          <li>
            <Link to="following" name="following" onClick={openFollows}>
              {userInfo.following} following
            </Link>
          </li>
        </ul>
        <div className="description">{userInfo.city}</div>
      </section>
    </header>
  );
};

export default ProfileHeader;
