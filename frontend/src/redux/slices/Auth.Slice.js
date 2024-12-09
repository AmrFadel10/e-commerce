import { createSlice } from "@reduxjs/toolkit";
import {
	activationAccount,
	loginUser,
	signup,
	updateUser,
} from "../apiCalls/Auth.ApiCall";
import toast from "react-hot-toast";

const initialState = {
	isSignupSuccess: false,
	isLoading: false,
	user: localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user")).user
		: null,
	error: null,
	createdMessage: null,
	activationMessage: null,
	token: localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user")).token
		: null,
	message: "",
};

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		// loadLoginRequest(state) {
		// 	state.isLoading = true;
		// },
		// loadLoginSuccess(state, action) {
		// 	state.isLoading = false;
		// 	state.success = true;
		// 	state.user = action.payload;
		// },
		// loadLoginFailed(state, action) {
		// 	state.isLoading = false;
		// 	state.success = false;
		// 	state.error = action.payload;
		// },
	},
	extraReducers(builder) {
		//login
		builder.addCase(loginUser.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.isLoading = false;
			state.success = action.payload.success;
			state.user = action.payload.user;
			state.error = null;
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.isLoading = false;
			state.success = false;
			state.user = null;
			state.error = action.payload;
			toast.error(action.payload);
		});
		//signup
		builder.addCase(signup.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(signup.fulfilled, (state, action) => {
			state.isLoading = false;
			state.createdMessage = action.payload.message;
			state.isSignupSuccess = true;
			toast.success(state.createdMessage);
		});
		builder
			.addCase(signup.rejected, (state, action) => {
				state.isLoading = false;
				state.createdMessage = null;
				state.error = action.payload;
				toast.error(action.payload);
			})
			.addCase(updateUser.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.success = true;
				console.log(action.payload);
				state.user = action.payload;
				state.message = "Info has been updated successfully!";
				toast.success(state.message);
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.isLoading = false;
				state.createdMessage = null;
				state.error = action.payload;
				toast.error(action.payload);
			});
		//Activation
		builder.addCase(activationAccount.pending, (state) => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(activationAccount.fulfilled, (state, action) => {
			state.isLoading = false;
			state.success = action.payload.success;
			state.activationMessage = action.payload.message;
			state.user = action.payload;
			toast.success(state.activationMessage);
		});
		builder.addCase(activationAccount.rejected, (state, action) => {
			state.isLoading = false;
			state.success = false;
			state.activationMessage = null;
			state.error = action.payload;
			toast.error(action.payload);
		});
	},
});

export default userSlice.reducer;
