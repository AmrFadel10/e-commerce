// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
import { useEffect } from "react";
import CompareList from "../components/CompareList";
import { useDispatch, useSelector } from "react-redux";
import { getCompareProductsApiCall } from "../redux/apiCalls/UserContains.ApiCall";
import { resetwishlist } from "../redux/slices/UserContains.Slice";

export default function CompareProducts() {
  const dispatch = useDispatch();
  const { isAddCompareSuccess, compareProducts } = useSelector(
    (state) => state.userContains
  );
  const { user, token } = useSelector((state) => state.user);
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (user) {
      dispatch(getCompareProductsApiCall({ token }));
      dispatch(resetwishlist());
    }
  }, [isAddCompareSuccess]);

  useEffect(() => {
    if (user) {
      dispatch(getCompareProductsApiCall({ token }));
    }
  }, [user]);
  const compareIds = compareProducts?.compareProducts;
  return (
    <>
      {/* <Meta title={"Compare products"} />
			<BreadCrumb title={"Compare"} /> */}
      <section className="container mx-auto ">
        <CompareList CompareProducts={compareIds} />
      </section>
    </>
  );
}
