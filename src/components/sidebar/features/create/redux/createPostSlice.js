import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "../../../../../network/Endpoints";

export const createPostThunk = createAsyncThunk("createPost", async (state) => {
  const token = localStorage.getItem("token");
  console.log(state);
  try {
    const response = await axios({
      url: `${Post.create}`,
      method: "POST",
      headers: {
        Authorization: `Bearer: ${token}`,
      },
      data: state,
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  createdPost: null,
  error: null,
};

const createPostSlice = createSlice({
  name: "createPost",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPostThunk.pending, (state, action) => {
        console.log("pending", state, action);
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        state.error = null;
        state.createdPost = action.payload;
      })
      .addCase(createPostThunk.rejected, (state, action) => {
        state.createdPost = null;
        state.error = action.payload;
      });
  },
});

export default createPostSlice.reducer;
