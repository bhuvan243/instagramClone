import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "../../../network/Endpoints";

export const postCommentsThunk = createAsyncThunk(
  "postComments",
  async (state) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios({
        url: `${Post.getComments}`,
        params: {
          postId: state,
        },
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

const initialState = {
  allComments: [],
  apiStatus: "init",
};

const postCommentsSlice = createSlice({
  name: "postComments",
  initialState: initialState,
  reducers: {
    addAComment: (state, action) => {
      if (action.payload.status === "success") {
        const newComment = {
          message: action.payload.commentMessage,
          user: {
            name: "You",
          },
          timeStamp: "now",
        };
        state.allComments.push(newComment);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCommentsThunk.pending, (state, action) => {
        state.apiStatus = "pending";
        console.log("postCommentsThunk.pending", action);
      })
      .addCase(postCommentsThunk.fulfilled, (state, action) => {
        state.allComments = action.payload.comments;
        state.apiStatus = "fulfilled";
        console.log("postCommentsThunk.fulfilled", action);
      })
      .addCase(postCommentsThunk.rejected, (state, action) => {
        console.log("postCommentsThunk.rejected", action);
      });
  },
});

const { addAComment } = postCommentsSlice.actions;

export default postCommentsSlice.reducer;

export function addNewComment(postId, commentMessage) {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios({
        url: `${Post.addComment}`,
        method: "POST",
        params: {
          postId: postId,
        },
        headers: {
          Authorization: `Bearer: ${token}`,
        },
        data: {
          message: commentMessage,
        },
      });
      dispatch(
        addAComment({ status: "success", commentMessage: commentMessage })
      );
    } catch (error) {
      dispatch(addAComment({ status: "failure" }));
    }
  };
}
