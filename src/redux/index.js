import { configureStore } from "@reduxjs/toolkit";
import userInfoReduder from "../routes/profile/redux/userInfoSlice";
import userPostsReducer from "../routes/profile/redux/userPostsSlice";
import followsReducer from "../routes/profile/redux/followsSlice";
import createPostReducer from "../components/sidebar/features/create/redux/createPostSlice";
import postCommentsReducer from "../routes/post/redux/postCommentsSlice";

const store = configureStore({
  reducer: {
    user: userInfoReduder,
    posts: userPostsReducer,
    follows: followsReducer,
    createPost: createPostReducer,
    comments: postCommentsReducer,
  },
});

export default store;

store.subscribe(() => {
  console.log("Subscribe in store", store.getState());
});
