import Categories from "../components/Categories";
import BestDeals from "../components/BestDeals";
import HomeBlogs from "../components/HomeBlogs";
import HomeLayout from "../components/HomeLayout";
import { useEffect } from "react";
import Sponsored from "../components/Sponsored";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompareProductsApiCall,
  getWishlistApiCall,
} from "../redux/apiCalls/UserContains.ApiCall";
import { resetwishlist } from "../redux/slices/UserContains.Slice";
import { getProducts } from "../redux/apiCalls/Products.ApiCall";
import { getBlogs } from "../redux/apiCalls/blogs.ApiCall";
import SomeProducts from "../components/SomeProducts";

export default function Home() {
  const dispatch = useDispatch();
  const { isAddWishlistSuccess, isAddCompareSuccess } = useSelector(
    (state) => state.userContains
  );
  const { user, token } = useSelector((state) => state.user);
  useEffect(() => {
    if ((isAddWishlistSuccess && user) || (isAddCompareSuccess && user)) {
      dispatch(getWishlistApiCall({ token }));
      dispatch(getCompareProductsApiCall({ token }));
      dispatch(resetwishlist());
    }
  }, [isAddWishlistSuccess, user, isAddCompareSuccess]);

  useEffect(() => {
    scrollTo(0, 0);
    dispatch(getProducts("limit=10&sort=-sold"));
    dispatch(getBlogs());
  }, []);

  useEffect(() => {
    dispatch(getProducts("limit=10&sort=-sold"));
    if (user) {
      dispatch(getWishlistApiCall({ token }));
      dispatch(getCompareProductsApiCall({ token }));
    }
  }, [user]);

  return (
    <>
      <HomeLayout />
      <Categories />
      {/* feture collections */}
      <BestDeals where={"Home"} />
      {<SomeProducts />}
      {/* Special products */}
      {/* <Events /> */}
      {/* blogs */}
      <HomeBlogs />
      {/* <Sponsored /> */}
    </>
  );
}
