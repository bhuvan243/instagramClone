import React, { useEffect } from "react";
import ProfileHeader from "./components/ProfileHeader";
import "./styles/ProfilePage.scss";
import UserPosts from "./components/UserPosts";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userInfoThunk } from "./redux/userInfoSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userInfoThunk());
  }, []);
  return (
    <main>
      <div className="profilePage">
        <ProfileHeader />
        <div className="heading-tabs">
          <div className="active-tab">POSTS</div>
        </div>
        <UserPosts />
        <Outlet />
      </div>
    </main>
  );
};

export default ProfilePage;
