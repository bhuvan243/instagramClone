import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../network/Endpoints";
import axios from "axios";

export const userInfoThunk = createAsyncThunk("infoStatus", async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios({
      url: `${User.userInfo}`,
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    });
    // console.log("inside userInfoThunk", response.data);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  user: {},
  error: null,
};

const userInfoSlice = createSlice({
  initialState: initialState,
  name: "userInfo",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userInfoThunk.pending, (state, action) => {
        // console.log("userInfoThunk pending" ,state, action);
      })
      .addCase(userInfoThunk.fulfilled, (state, action) => {
        // console.log("userInfoThunk fulfilled" ,state, action);
        state.user = action.payload;
        state.error = null;
      })
      .addCase(userInfoThunk.rejected, (state, action) => {
        // console.log("asyncthunk rejected" ,state, action);
        state.user = {};
        state.error = action.payload;
      });
  },
});

export default userInfoSlice.reducer;
