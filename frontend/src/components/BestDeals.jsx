import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { useSelector } from "react-redux";

const BestDeals = ({ where }) => {
  const { products, success } = useSelector((state) => state.products);
  const [productsState, setProductsState] = useState([]);
  const { wishlist, compareProducts } = useSelector(
    (state) => state.userContains
  );
  const wishlistId = wishlist?.wishlist?.map((item) => item._id);
  const compareIds = compareProducts?.compareProducts?.map((item) => item._id);

  useEffect(() => {
    if (success && products) {
      // Create a copy of the products array before sorting
      const sortedProducts = [...products]?.sort((a, b) => b.sold - a.sold);
      setProductsState(sortedProducts);
    }
  }, [products, success]);

  return (
    <div className="my-16">
      <h3 className="text-2xl font-semibold ">
        {where === "productPage" ? "You may also like" : "Featured Collection"}
      </h3>
      <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 gap-6 my-8">
        {productsState.length === 0 ? (
          <div className="pl-2 text-gray-500">No collection provided!</div>
        ) : (
          productsState?.map((product, index) => {
            return (
              <div key={index}>
                <FeatureCard
                  product={product}
                  wishlistId={wishlistId}
                  compareIds={compareIds}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BestDeals;
