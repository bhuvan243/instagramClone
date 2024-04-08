import React, { useEffect, useState } from "react";
import "../styles/userPosts.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userPostsThunk } from "../redux/userPostsSlice";

const MyPost = ({ post }) => {
  const [overlayShow, setOverlayShow] = useState(false);
  
  const navigate = useNavigate();
  function showOverlay() {
    setOverlayShow(true);
  }
  function hideOverlay() {
    setOverlayShow(false);
  }
  function openPost(postId) {
    navigate(`p/${postId}`);
  }
  return (
    <div
      className="my-post"
      onMouseEnter={showOverlay}
      onMouseLeave={hideOverlay}
      onClick={() => openPost(post._id)}
    >
      <img src={post.imageUrls[0]} alt="post-image" />
      {overlayShow && (
        <div className="overlay-content">
          <span className="material-icons">favorite</span>
          {post.likesCount}
          <span className="material-icons">mode_comment</span>
          {post.commentsCount}
        </div>
      )}
    </div>
  );
};

const UserPosts = () => {
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    dispatch(userPostsThunk());
  }, []);
  if (userPosts.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="user-posts-container">
        {userPosts.map((post) => {
          return <MyPost post={post} key={post._id} />;
        })}
      </div>
    </>
  );
};

export default UserPosts;
