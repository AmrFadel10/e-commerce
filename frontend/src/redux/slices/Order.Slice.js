import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {
	// deleteOrder,
	getMyOrders,
	// updateOrder,
} from "../apiCalls/Order.ApiCall";

const initialState = {
	addOrder: null,
	orders: null,
	oneOrder: null,
	isSuccess: false,
	isAddedSuccess: false,
	isUpdateSuccess: false,
	isDeleteSuccess: false,
	isLoading: false,
	isError: false,
	message: "",
};

const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		resetOrder: (state) => {
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
			// .addCase(addToOrder.pending, (state) => {
			// 	state.isLoading = true;
			// })
			// .addCase(addToOrder.fulfilled, (state, action) => {
			// 	state.isLoading = false;
			// 	state.isAddedSuccess = true;
			// 	state.addOrder = action.payload;
			// 	state.message = "added to order successfully!";
			// 	toast.success(state.message);
			// })
			// .addCase(addToOrder.rejected, (state, action) => {
			// 	state.isLoading = false;
			// 	state.isError = true;
			// 	state.message = action.payload;
			// 	toast.error(action.payload);
			// })
			.addCase(getMyOrders.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getMyOrders.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.orders = action.payload;
				state.message = "";
			})
			.addCase(getMyOrders.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				toast.error(action.payload);
			});
		// .addCase(deleteOrder.pending, (state) => {
		// 	state.isLoading = true;
		// })
		// .addCase(deleteOrder.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isDeleteSuccess = true;
		// 	state.message = action.payload;
		// 	toast.success(state.message);
		// })
		// .addCase(deleteOrder.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isError = true;
		// 	state.message = action.payload;
		// 	toast.error(action.payload);
		// })
		// .addCase(updateOrder.pending, (state) => {
		// 	state.isLoading = true;
		// })
		// .addCase(updateOrder.fulfilled, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isUpdateSuccess = true;
		// 	state.oneOrder = action.payload;
		// 	state.message = "";
		// })
		// .addCase(updateOrder.rejected, (state, action) => {
		// 	state.isLoading = false;
		// 	state.isError = true;
		// 	state.message = action.payload;
		// 	toast.error(action.payload);
		// });
	},
});

export default orderSlice.reducer;
export const { resetOrder } = orderSlice.actions;
