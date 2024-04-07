import React from "react";
import FollowPopUp from "./FollowPopUp";

const props = {
  title: "Followers",
  stateKey: "followers",
};

const Followers = () => {
  return (
    <>
      <FollowPopUp props={props} />
    </>
  );
};

export default Followers;
