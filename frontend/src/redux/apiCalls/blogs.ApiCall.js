import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/baseUrl";

export const getBlogs = createAsyncThunk(
  "blogs/get-all",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await request.get("/blog/");

      return data;
    } catch (error) {
      //   console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const getABlog = createAsyncThunk(
  "blogs/get-ablog",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await request.get("/blog/" + arg.id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
