import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./styles/create-post.scss";
import { createPostThunk } from "./redux/createPostSlice";
import { useDispatch } from "react-redux";

const CreateNewPost = forwardRef((props, ref) => {
  const [showPopup, setShowPopup] = useState(true);
  const dispatch = useDispatch();

  useImperativeHandle(ref, () => {
    return { setShowPopup };
  });

  function handleCreatePostSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    const imageUrls = [event.target.imageUrl.value];
    dispatch(createPostThunk({ title, content, imageUrls }));
  }
  function closeCreatePostPopUp(event) {
    event.stopPropagation();
    setShowPopup(false);
  }
  if (!showPopup) {
    return null;
  }
  return (
    <div className="create-post-page" onClick={closeCreatePostPopUp}>
      <span
        className="material-icons close-icon"
        onClick={closeCreatePostPopUp}
      >
        close
      </span>
      <div className="pop-up">
        <div className="heading">Create new post</div>
        <div className="contents-container">
          <form onSubmit={handleCreatePostSubmit}>
            <input name="title" placeholder="Post Title..." />
            <input name="content" placeholder="Content Description..." />
            <input name="imageUrl" placeholder="Image URL..." />
            <button type="submit">Create Post</button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default CreateNewPost;
