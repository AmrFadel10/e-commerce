import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
  addToCart,
  deleteCart,
  getCart,
  updateCart,
} from "../apiCalls/Cart.ApiCall";

const initialState = {
  addCart: null,
  cart: null,
  oneCart: null,
  isSuccess: false,
  isAddedSuccess: false,
  isUpdateSuccess: false,
  isDeleteSuccess: false,
  isLoading: false,
  isError: false,
  totalPrice: 0,
  message: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isUpdateSuccess = false;
      state.isDeleteSuccess = false;
      state.isAddedSuccess = false;
      state.message = "";
      state.isError = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAddedSuccess = true;
        state.addCart = action.payload;
        state.message = "added to cart successfully!";
        toast.success(state.message);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cart = action.payload;
        state.message = "";
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDeleteSuccess = true;
        state.message = action.payload;
        toast.success(state.message);
      })
      .addCase(deleteCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isUpdateSuccess = true;
        state.oneCart = action.payload;
        state.message = "";
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});

export default cartSlice.reducer;
export const { resetCart } = cartSlice.actions;
