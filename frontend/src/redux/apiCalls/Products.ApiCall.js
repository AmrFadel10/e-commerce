import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/baseUrl";

export const getProducts = createAsyncThunk(
	"products/get-all",
	async (arg, { rejectWithValue }) => {
		try {
			const { data } = await request.get(`/product/?${arg}`);
			return data;
		} catch (error) {
			return rejectWithValue(error.response.data.message);
		}
	}
);
export const getProduct = createAsyncThunk(
	"products/get-one",
	async (arg, { rejectWithValue }) => {
		try {
			const { data } = await request.get("/product/" + arg.id);
			return data;
		} catch (error) {
			return rejectWithValue(error.response.data.message);
		}
	}
);
