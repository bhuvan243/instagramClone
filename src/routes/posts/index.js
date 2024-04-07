import { Tabs } from "antd";
// import { PostsList } from "./components/PostsList";
// import { UserInfo } from "./components/UserInfo";
import "./styles/index.scss";
// import UserTabs from "./tabs";

const Posts = () => {
  return (
    <div className="root-posts-container">
      <div className="left-box">
        <h1>This is inside the Posts component</h1>
        {/* <UserInfo /> */}
        {/* <PostsList /> */}
      </div>
      <div>{/* <UserTabs /> */}</div>
    </div>
  );
};

export default Posts;
