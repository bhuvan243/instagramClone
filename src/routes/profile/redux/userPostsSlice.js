import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../network/Endpoints";
import axios from "axios";

export const userPostsThunk = createAsyncThunk("userPosts", async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios({
      url: `${Post.all}`,
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    });
    // console.log("inside userPostsThunk", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  posts: [],
  error: null,
};

const userPostsSlice = createSlice({
  initialState: initialState,
  name: "userPosts",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userPostsThunk.pending, (state, action) => {
        // console.log("user posts thunk", state, action);
      })
      .addCase(userPostsThunk.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(userPostsThunk.rejected, (state, action) => {
        state.posts = [];
        state.error = action.payload;
      });
  },
});

export default userPostsSlice.reducer;
