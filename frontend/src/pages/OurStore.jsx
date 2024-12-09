// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
import SideBarStore from "../components/SideBarStore";
import { RxColumns } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { LuEqual } from "react-icons/lu";
import FeatureCard from "../components/FeatureCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/apiCalls/Products.ApiCall";
import {
  getCompareProductsApiCall,
  getWishlistApiCall,
} from "../redux/apiCalls/UserContains.ApiCall";
import { resetwishlist } from "../redux/slices/UserContains.Slice";
import { useSearchParams } from "react-router-dom";

export default function OurStore() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const [grid, setGrid] = useState(3);
  const [searchParams, setSearchParams] = useSearchParams();
  const { products } = useSelector((state) => state.products);

  //selctors
  const {
    wishlist,
    isAddWishlistSuccess,
    isAddCompareSuccess,
    compareProducts,
  } = useSelector((state) => state.userContains);
  const { token, user } = useSelector((state) => state.user);
  //
  useEffect(() => {
    if (user) {
      if (isAddWishlistSuccess || isAddCompareSuccess) {
        dispatch(getWishlistApiCall({ token }));
        dispatch(getCompareProductsApiCall({ token }));

        dispatch(resetwishlist());
      }
    }
  }, [isAddWishlistSuccess, user, isAddCompareSuccess]);

  useEffect(() => {
    dispatch(getProducts(searchParams));
    if (user) {
      dispatch(getWishlistApiCall({ token }));
      dispatch(getCompareProductsApiCall({ token }));
    }
  }, [user, searchParams]);
  const wishlistId = wishlist?.wishlist?.map((item) => item._id);
  const compareIds = compareProducts?.compareProducts?.map((item) => item._id);

  return (
    <>
      {/* <Meta title={"Our store"} />
			<BreadCrumb title={"OurStore"} /> */}
      <section className="mb-16">
        <div className="container mx-auto mt-8 flex gap-8">
          <SideBarStore
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            products={products}
          />
          <div className="flex-[4] rounded-lg ">
            <div className="flex justify-between bg-white p-4 rounded-xl">
              <div className="flex items-center gap-4">
                <p>Sort By:</p>
                <select
                  name="sort_by"
                  className="bg-gray-50 md:p-3 p-1 rounded-lg focus:outline-none text-gray-400"
                  id="SortBy"
                  onChange={(e) => {
                    const { value } = e.target;
                    if (value === "best-selling")
                      setSearchParams({ sort: "-sold", limit: 20 });
                    if (value === "title-ascending")
                      setSearchParams({ sort: "title", limit: 20 });
                    if (value === "title-descending")
                      // navigate("/products?sort=title&limit=2");
                      setSearchParams({ sort: "-title", limit: 20 });
                    if (value === "price-ascending")
                      // navigate("/products?sort=price&limit=2");
                      setSearchParams({ sort: "-price", limit: 20 });
                    if (value === "price-descending")
                      // navigate("/products?sort=-price&limit=2");
                      setSearchParams({ sort: "-price", limit: 20 });
                    if (value === "created-ascending")
                      // navigate("/products?sort=createdAt");
                      setSearchParams({ sort: "createdAt", limit: 20 });
                    if (value === "created-descending")
                      // navigate("/products?sort=-createdAt");
                      setSearchParams({ sort: "-createdAt", limit: 20 });
                  }}
                >
                  <option value="manual">Featured</option>
                  <option value="best-selling">Best selling</option>
                  <option value="title-ascending">Alphabetically, A-Z</option>
                  <option value="title-descending">Alphabetically, Z-A</option>
                  <option value="price-ascending">Price, low to high</option>
                  <option value="price-descending">Price, high to low</option>
                  <option value="created-ascending">Date, old to new</option>
                  <option value="created-descending">Date, new to old</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <div className="md:flex gap-2 items-center hidden">
                  <div
                    className=" text-xl p-2 rounded-md bg-gray-100 cursor-pointer font-bold"
                    onClick={() => setGrid(4)}
                  >
                    <RxColumns />
                  </div>
                  <div
                    className="rotate-90 text-xl p-2 rounded-md bg-gray-100 cursor-pointer font-bold"
                    onClick={() => setGrid(3)}
                  >
                    <BsList />
                  </div>
                  <div
                    className="rotate-90 text-xl p-2 rounded-md bg-gray-100 cursor-pointer font-bold"
                    onClick={() => setGrid(2)}
                  >
                    <LuEqual />
                  </div>
                  <div
                    className=" text-xl p-2 rounded-md bg-gray-100 cursor-pointer font-bold"
                    onClick={() => setGrid(1)}
                  >
                    <IoMdMenu />
                  </div>
                </div>
              </div>
            </div>
            {products?.length >= 1 ? (
              <div
                className={`grid md:grid-cols-${grid} gap-6 py-6 grid-cols-1`}
              >
                {products.map((product, index) => {
                  return (
                    <div key={index}>
                      <FeatureCard
                        product={product}
                        grid={grid}
                        wishlistId={wishlistId}
                        compareIds={compareIds}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex justify-center items-center w-full min-h-[calc(100vh-160px)]">
                No products found!
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
