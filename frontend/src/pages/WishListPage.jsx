// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import WishListCards from "../components/WishListCards";
import { getWishlistApiCall } from "../redux/apiCalls/UserContains.ApiCall";
import { resetwishlist } from "../redux/slices/UserContains.Slice";
import { useEffect } from "react";

export default function WishListPage() {
  const dispatch = useDispatch();
  const { wishlist, isAddWishlistSuccess } = useSelector(
    (state) => state.userContains
  );
  const { token, user } = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      if (isAddWishlistSuccess) {
        dispatch(getWishlistApiCall({ token }));
        dispatch(resetwishlist());
      }
    }
  }, [isAddWishlistSuccess]);

  useEffect(() => {
    if (user) {
      dispatch(getWishlistApiCall({ token }));
    }
    scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Meta title={"Wishlist"} />
			<BreadCrumb title={"wishlist"} /> */}
      <section className="container mx-auto ">
        <WishListCards wishlist={wishlist?.wishlist} />
      </section>
    </>
  );
}
