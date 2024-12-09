import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/baseUrl";

export const addWishlistApiCall = createAsyncThunk(
	"user-contains/add-wishlist",
	async (arg, thunkAPI) => {
		try {
			const { data } = await request.put(
				"/user/wishlist",
				{ prodId: arg.id },
				{
					headers: {
						Authorization: "bearer " + arg.token,
					},
				}
			);
			return data;
		} catch (error) {
			thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const getWishlistApiCall = createAsyncThunk(
	"user-contains/get-wishlist",
	async (arg, thunkAPI) => {
		try {
			const { data } = await request.get("/user/wishlist", {
				headers: {
					Authorization: "bearer " + arg.token,
				},
			});
			return data;
		} catch (error) {
			thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);
export const addCompareProductsApiCall = createAsyncThunk(
	"user-contains/add-compare-products",
	async (arg, thunkAPI) => {
		console.log(arg);
		try {
			const { data } = await request.put(
				"/user/compare",
				{ prodId: arg.id },
				{
					headers: {
						Authorization: "bearer " + arg.token,
					},
				}
			);
			return data;
		} catch (error) {
			thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const getCompareProductsApiCall = createAsyncThunk(
	"user-contains/get-compare-products",
	async (arg, thunkAPI) => {
		try {
			const { data } = await request.get("/user/compare", {
				headers: {
					Authorization: "bearer " + arg.token,
				},
			});
			return data;
		} catch (error) {
			thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);
