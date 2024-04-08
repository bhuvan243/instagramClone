import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postCommentsThunk } from "../redux/postCommentsSlice";
import "../styles/postPage.scss";

const OtherComments = ({ postId }) => {
  //   const [allComments, setAllComments] = useState([]);
  //   const [errorOnCommentsFetch, setErrorOnCommentsFetch] = useState({
  //     message: "",
  //     status: false,
  //   });
  const dispatch = useDispatch();
  const { allComments, apiStatus } = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(postCommentsThunk(postId));
  }, []);
  if (apiStatus === "init" || apiStatus === "pending") {
    return <h3>Comments are Loading...</h3>;
  }
  return (
    <>
      {allComments.length > 0 &&
        allComments.map((comment, index) => (
          <div key={index} className="other-comment">
            <img src="https://picsum.photos/200/300" alt="random-image" />
            <div className="user-comment">
              <div className="content-container">
                <strong className="commented-username">
                  {comment.user.name}{" "}
                </strong>
                {comment.message}
              </div>
              <div className="comment-metrics">
                <span>{comment.timeStamp}</span>
                <strong>1 like</strong>
                <strong>Reply</strong>
              </div>
            </div>
            <span className="material-icons">favorite</span>
          </div>
        ))}
    </>
  );
};

export default OtherComments;
