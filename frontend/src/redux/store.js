import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/Auth.Slice";
import productsReducer from "./slices/Products.Slice";
import blogsReducer from "./slices/Blogs.Slice";
import userContainsReducer from "./slices/UserContains.Slice";
import contactReducer from "./slices/Contact.Slice";
import cartReducer from "./slices/Cart.Slice";
import orderReducer from "./slices/Order.Slice";
import categoryReducer from "./slices/category.Slice";
import colorsReducer from "./slices/colors.Slice";
import brandsReducer from "./slices/brands.Slice";

const store = configureStore({
	reducer: {
		user: userReducer,
		products: productsReducer,
		blogs: blogsReducer,
		userContains: userContainsReducer,
		contact: contactReducer,
		cart: cartReducer,
		order: orderReducer,
		category: categoryReducer,
		color: colorsReducer,
		brand: brandsReducer,
	},
	devTools: true,
});

export default store;
