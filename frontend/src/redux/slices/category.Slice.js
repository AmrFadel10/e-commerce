import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { categoryApiCall } from "../apiCalls/category.ApiCall";

const initialState = {
  categories: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    resetCategory: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryApiCall.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(categoryApiCall.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(categoryApiCall.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export const { resetCategory } = categorySlice.actions;

export default categorySlice.reducer;
