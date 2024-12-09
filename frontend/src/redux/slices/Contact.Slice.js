import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { setContact } from "../apiCalls/Contact.ApiCall";

const initialState = {
	contact: null,
	isSuccess: false,
	isLoading: false,
	isError: false,
	message: "",
};

const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(setContact.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(setContact.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isSuccess = true;
			state.contact = action.payload;
			state.message = "Send successfully!";
			toast.success(state.message);
		});
		builder.addCase(setContact.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.message = action.payload;
			toast.error(action.payload);
		});
	},
});

export default contactSlice.reducer;
