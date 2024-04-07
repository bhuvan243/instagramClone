import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../../network/Endpoints";
export const followsThunk = createAsyncThunk(
  "followsSlice",
  async (state, action) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios({
        url: `${User[state]}`,
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      });
      console.log("inside follows thunk", state, response.data);
      return {
        triggeredItem: state,
        data: response.data,
      };
    } catch (error) {
      return error.message;
    }
  }
);

const initialState = {
  followers: null,
  follwing: null,
  error: null,
};

const followsSlice = createSlice({
  initialState: initialState,
  name: "followsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(followsThunk.pending, (state, action) => {
        console.log("inside follows thunk pending...", state, action);
      })
      .addCase(followsThunk.fulfilled, (state, action) => {
        state.error = null;
        state[action.payload.triggeredItem] = action.payload.data;
      })
      .addCase(followsThunk.rejected, (state, action) => {
        state = initialState;
        state.error = action.payload;
      });
  },
});

export default followsSlice.reducer;
