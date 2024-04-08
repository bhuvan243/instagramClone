import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles/postPage.scss";
import OtherComments from "./components/OtherComments";
import { addNewComment } from "./redux/postCommentsSlice";

// const post = {
//   _id: "660c523002844bbc786f4c29",
//   title: "My first post",
//   content: "No content, hahaha",
//   imageUrls: [
//     "https://www.1800flowers.com/blog/wp-content/uploads/2017/06/Smile-Header.jpg",
//     "https://img.freepik.com/free-vector/cute-happy-smiling-child-isolated-white_1308-32243.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702166400&semt=ais",
//   ],
//   likesCount: 1,
//   commentsCount: 4,
// };

const Post = () => {
  const [showPost, setShowPost] = useState(true);
  // useEffect(() => {
  //   return setShowPost(false);
  // }, []);
  // const [currentPostData, setCurrentPostData] = useState({
  //   selectedPost: null,
  //   currentIndex: 0,
  // });
  // const { selectedPost, currentIndex } = currentPostData;
  const { postId } = useParams(); // to get the obj from store as its already we have
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user);
  const allPosts = useSelector((state) => state.posts.posts);
  let selectedPost = {},
    currentIndex = 0;

  allPosts.forEach((post, index) => {
    if (post._id === postId) {
      // setCurrentPostData({
      //   selectedPost: post,
      //   currentIndex: index,
      // });
      selectedPost = post;
      currentIndex = index;
      return;
    }
  });

  // const selectedPost = useSelector((state) => {
  //   return state.posts.posts.find((post) => post._id === postId);
  // });

  function closePostPage(event) {
    event.stopPropagation();
    navigate(-1);
  }
  function addComment(event) {
    event.preventDefault();
    const comment = event.target.comment.value;
    // implement add comment function
    dispatch(addNewComment(selectedPost._id, comment));
    event.target.comment.value = "";
  }
  function showPreviousPost() {
    let previousPostId = allPosts[currentIndex - 1]._id;
    navigate(`/profile/p/${previousPostId}`);
  }
  function showNextPost() {
    let nextPostId = allPosts[currentIndex + 1]._id;
    navigate(`/profile/p/${nextPostId}`);
  }

  const handleClicks = (e) => e.stopPropagation();
  if (!selectedPost) return <h1>Loading...</h1>;
  return (
    <>
      {showPost && (
        <div className="post-page" onClick={closePostPage}>
          <div className="close-btn" onClick={closePostPage}>
            <span className="material-icons">close</span>
          </div>
          <div className="align-container" onClick={handleClicks}>
            <button className="nav-btn" onClick={showPreviousPost}>
              <span className="material-icons">chevron_left</span>
            </button>
            <div className="post-container">
              <div className="post-media">
                <img src={selectedPost.imageUrls[0]} alt={selectedPost.title} />
              </div>
              <div className="post-details">
                <section className="posted-user header-1">
                  <img src="https://picsum.photos/200/300" alt="random-image" />
                  <strong className="posted-user-name">{userInfo.name}</strong>
                </section>
                <section className="other-users-comments">
                  <section className="posted-user">
                    <img
                      src="https://picsum.photos/200/300"
                      alt="random-image"
                    />
                    <span>
                      <strong className="posted-user-name">
                        {userInfo.name}
                      </strong>{" "}
                      {selectedPost.title}
                    </span>
                  </section>
                  <OtherComments postId={postId} />
                </section>
                <section className="post-metrics">
                  <div className="metrics-icons">
                    <div className="icons">
                      <span className="material-icons" style={{ color: "red" }}>
                        favorite
                      </span>
                      <span className="material-icons">mode_comment</span>
                      <span className="material-icons">send</span>
                    </div>
                    <span className="material-icons">bookmark</span>
                  </div>
                  <strong className="likesCount">
                    {selectedPost.likesCount} likes
                  </strong>
                  <p className="time-stamp">5 hours ago</p>
                </section>
                <section className="add-comment">
                  <span className="material-icons">sentiment_satisfied</span>
                  <form onSubmit={addComment}>
                    <input name="comment" placeholder="Add a comment..." />
                    <button type="submit">Post</button>
                  </form>
                </section>
              </div>
            </div>
            <button className="nav-btn" onClick={showNextPost}>
              <span className="material-icons">chevron_right</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
