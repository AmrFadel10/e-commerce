import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/baseUrl";

export const colorsApiCall = createAsyncThunk(
	"color/get-colors",
	async (_, thunkAPI) => {
		try {
			const { data } = await request.get("/color/");
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);
