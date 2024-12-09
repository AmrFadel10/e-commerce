import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/baseUrl";

// export const addToOrder = createAsyncThunk(
// 	"order/add",
// 	async (arg, { rejectWithValue }) => {
// 		try {
// 			const { data } = await request.post("/order/", arg.data, {
// 				headers: {
// 					Authorization: "bearer " + arg.token,
// 				},
// 			});
// 			return data;
// 		} catch (error) {
// 			return rejectWithValue(error.response.data.message);
// 		}
// 	}
// );

export const getMyOrders = createAsyncThunk(
	"order/get",
	async (arg, { rejectWithValue }) => {
		try {
			const { data } = await request.get(`/order/get-my-order`, {
				headers: {
					Authorization: "bearer " + arg.token,
				},
			});
			return data;
		} catch (error) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

// export const deleteOrder = createAsyncThunk(
// 	"order/delete",
// 	async (arg, { rejectWithValue }) => {
// 		try {
// 			const { data } = await request.delete(`/order/${arg.orderId}`, {
// 				headers: {
// 					Authorization: "bearer " + arg.token,
// 				},
// 			});
// 			return data;
// 		} catch (error) {
// 			return rejectWithValue(error.response.data.message);
// 		}
// 	}
// );

// export const updateOrder = createAsyncThunk(
// 	"order/update",
// 	async (arg, { rejectWithValue }) => {
// 		try {
// 			const { data } = await request.put(
// 				`/order/${arg.orderId}`,
// 				{ quantity: arg.quantity },
// 				{
// 					headers: {
// 						Authorization: "bearer " + arg.token,
// 					},
// 				}
// 			);
// 			return data;
// 		} catch (error) {
// 			return rejectWithValue(error.response.data.message);
// 		}
// 	}
// );
