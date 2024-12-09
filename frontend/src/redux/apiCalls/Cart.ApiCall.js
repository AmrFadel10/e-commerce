import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/baseUrl";

export const addToCart = createAsyncThunk(
	"cart/add",
	async (arg, { rejectWithValue }) => {
		try {
			const { data } = await request.post("/cart/", arg.data, {
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
export const getCart = createAsyncThunk(
	"cart/get",
	async (arg, { rejectWithValue }) => {
		try {
			const { data } = await request.get("/cart/", {
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

export const deleteCart = createAsyncThunk(
	"cart/delete",
	async (arg, { rejectWithValue }) => {
		try {
			const { data } = await request.delete(`/cart/${arg.cartId}`, {
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

export const updateCart = createAsyncThunk(
	"cart/update",
	async (arg, { rejectWithValue }) => {
		try {
			const { data } = await request.put(
				`/cart/${arg.cartId}`,
				{ quantity: arg.quantity },
				{
					headers: {
						Authorization: "bearer " + arg.token,
					},
				}
			);
			return data;
		} catch (error) {
			return rejectWithValue(error.response.data.message);
		}
	}
);
