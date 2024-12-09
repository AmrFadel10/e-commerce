import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/baseUrl";

export const loginUser = createAsyncThunk(
  "users/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await request.post("/auth/login", userData, {
        withCredentials: true,
      });
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signup = createAsyncThunk(
  "users/signup",
  async (details, { rejectWithValue }) => {
    try {
      const { data } = await request.post("/auth/signup", details, {
        withCredentials: true,
      });
      console.log("ffffffffffffffff");
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const activationAccount = createAsyncThunk(
  "users/activation",
  async (activationToken, { rejectWithValue }) => {
    try {
      const { data } = await request.post("/auth/activation", {
        activationToken,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk("users/update", async (arg, API) => {
  try {
    const { data } = await request.put(`/user/`, arg.data, {
      headers: {
        Authorization: "bearer " + arg.token,
      },
    });
    console.log(data);
    let user = JSON.parse(localStorage.getItem("user"));
    user.user = data;
    localStorage.setItem("user", JSON.stringify(user));
    // localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    return API.rejectWithValue(error.response.data.message);
  }
});
