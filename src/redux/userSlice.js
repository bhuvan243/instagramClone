import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  posts: null,
  comments: {},
  createPost: {
    apiStatus: "init",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    USER_INFO_SUCCESS: (state, action) => {
      state.info = action.payload;
    },
    FETCH_POSTS_SUCCESS: (state, action) => {
      state.posts = action.payload;
    },
    COMMENTS_FETCH_SUCCESS: (state, action) => {
      const postid = action.payload.postId;
      const postComments = action.payload.comments;
      state.comments = state.comments[postid] = postComments;
    },
    CREATE_POST_APISTATUS: (state, action) => {
      state.createPost.apiStatus = action.payload;
    },
  },
});

export default userSlice;
