import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/baseUrl";

export const setContact = createAsyncThunk(
	"contact/set",
	async (arg, { rejectWithValue }) => {
		try {
			const { data } = await request.post("/enquiry/create", arg.data, {
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
