import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getProduct, getProducts } from "../apiCalls/Products.ApiCall";

const initialState = {
	products: null,
	product: null,
	success: false,
	isLoading: false,
	error: null,
	message: "",
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getProducts.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.isLoading = false;
			state.success = true;
			state.products = action.payload;
			state.error = null;
		});
		builder
			.addCase(getProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.success = false;
				state.products = null;
				state.error = action.payload;
				toast.error(action.payload);
			})
			.addCase(getProduct.pending, (state) => {
				state.isLoading = true;
			});
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.isLoading = false;
			state.success = true;
			state.product = action.payload;
		});
		builder.addCase(getProduct.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
			toast.error(action.payload);
		});
	},
});

export default productsSlice.reducer;
