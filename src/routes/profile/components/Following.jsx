import React from "react";
import FollowPopUp from "./FollowPopUp";

const props = {
  title: "Following",
  tab: "People",
  stateKey: "following",
};

const Following = () => {
  return (
    <>
      <FollowPopUp props={props} />
    </>
  );
};

export default Following;
