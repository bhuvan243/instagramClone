import React, { useRef } from "react";
import {useParams, useNavigate} from "react-router-dom";
import "./styles/postPage.scss";

const post = {
  _id: "660c523002844bbc786f4c29",
  title: "My first post",
  content: "No content, hahaha",
  imageUrls: [
    "https://www.1800flowers.com/blog/wp-content/uploads/2017/06/Smile-Header.jpg",
    "https://img.freepik.com/free-vector/cute-happy-smiling-child-isolated-white_1308-32243.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702166400&semt=ais",
  ],
  likesCount: 1,
  commentsCount: 4,
};

const Post = () => {
  const {postId} = useParams(); // to get the obj from store as its already we have
  const navigate = useNavigate();
  function closePostPage(event){
    event.stopPropagation();
    navigate(-1);
  }
  function addComment(event) {
    event.preventDefault();
    const comment = event.target.comment.value;
    // implement add comment function
  }
  return (
    <div className="post-page" onClick={closePostPage}>
      <div className="close-btn" onClick={closePostPage}>
        <span className="material-icons">close</span>
      </div>
      <div className="align-container">
        <button className="nav-btn">
          <span className="material-icons">chevron_left</span>
        </button>
        <div className="post-container">
          <div className="post-media">
            <img src={post.imageUrls[0]} alt={post.title} />
          </div>
          <div className="post-details">
            <section className="posted-user header-1">
              <img src="https://picsum.photos/200/300" alt="random-image" />
              <strong className="posted-user-name">mcity confessions</strong>
            </section>
            <section className="other-users-comments">
              <section className="posted-user">
                <img src="https://picsum.photos/200/300" alt="random-image" />
                <span>
                  <strong className="posted-user-name">
                    mcity confessions
                  </strong>{" "}
                  This is owner's content
                </span>
              </section>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((element) => (
                <div key={element} className="other-comment">
                  <img src="https://picsum.photos/200/300" alt="random-image" />
                  <div className="user-comment">
                    <div className="content-container">
                      <strong className="commented-username">j.pillai </strong>
                      Why didn't you complaint Onspot when you came to know that
                      your money got stolen to security guards?
                    </div>
                    <div className="comment-metrics">
                      <span>1hr</span>
                      <strong>1 like</strong>
                      <strong>Reply</strong>
                    </div>
                  </div>
                  <span className="material-icons">favorite</span>
                </div>
              ))}
            </section>
            <section className="post-metrics">
              <div className="metrics-icons">
                <div className="icons">
                  <span className="material-icons">favorite</span>
                  <span className="material-icons">mode_comment</span>
                  <span className="material-icons">send</span>
                </div>
                <span className="material-icons">bookmark</span>
              </div>
              <strong className="likesCount">75 likes</strong>
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
        <button className="nav-btn">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
