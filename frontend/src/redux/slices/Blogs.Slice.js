import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getABlog, getBlogs } from "../apiCalls/blogs.ApiCall";

const initialState = {
  blogs: null,
  ablog: null,
  success: false,
  isLoading: false,
  error: null,
  message: "",
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.blogs = action.payload;
        state.error = null;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.blogs = null;
        state.error = action.payload;
        // toast.error(action.payload);
      })
      .addCase(getABlog.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getABlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.ablog = action.payload;
        state.error = null;
      })
      .addCase(getABlog.rejected, (state, action) => {
        state.isLoading = false;
        state.success = false;
        state.blogs = null;
        state.error = action.payload;
        // toast.error(action.payload);
      });
  },
});

export default blogsSlice.reducer;
