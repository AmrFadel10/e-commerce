import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/axios/axios";

export const productsApiCall = createAsyncThunk(
	"products/get-products",
	async (_, thunkAPI) => {
		try {
			const { data } = await request.get("v2/product");
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);