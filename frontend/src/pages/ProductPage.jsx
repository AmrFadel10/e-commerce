import { Link, useLocation, useNavigate } from "react-router-dom";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import { PiHeartStraightLight } from "react-icons/pi";
import { IoIosShuffle } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { SiMaterialdesignicons } from "react-icons/si";

import { CiHeart } from "react-icons/ci";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProducts } from "../redux/apiCalls/Products.ApiCall";
import { addToCart, getCart } from "../redux/apiCalls/Cart.ApiCall";

import toast from "react-hot-toast";
import BestDeals from "../components/BestDeals";

export default function ProductPage() {
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [alreadyAddedToCart, setAlreadyAddedToCart] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [open, setOpen] = useState(0);
  const id = location.pathname.split("/")[2];
  const { token, user } = useSelector((state) => state.user);
  const { product } = useSelector((state) => state.products);
  const { cart, isSuccess, isAddedSuccess } = useSelector(
    (state) => state.cart
  );

  const onClickhandle = (tab) => {
    if (open === tab) {
      setOpen(0);
    } else {
      setOpen(tab);
    }
  };
  const addCart = (data) => {
    if (color === "") {
      toast.error("You must be choice a color");
      return false;
    } else {
      dispatch(addToCart({ data, token }));
    }
  };

  useEffect(() => {
    scrollTo(0, 0);
    if (user) {
      dispatch(getCart({ token }));
    }
    dispatch(getProduct({ id }));
    dispatch(getProducts("limit=5&sort=-sold"));
  }, [id, user]);

  useEffect(() => {
    if (user) {
      if (isSuccess || isAddedSuccess) {
        for (let i = 0; i < cart?.length; i++) {
          if (cart?.[i]?.product?._id === id) setAlreadyAddedToCart(true);
        }
      }
    }
  }, [isSuccess, user]);

  // useEffect(() => {
  // 	if (isAddedSuccess) {
  // 		navigate("/cart");
  // 	}
  // }, [isAddedSuccess]);

  return (
    <>
      {/* <Meta title={"Product"} />
			<BreadCrumb title={"Product"} /> */}
      <section className="container mx-auto mb-36">
        <div className="   flex  my-8 gap-x-8 flex-col md:flex-row ">
          <div className="flex-1 flex flex-col gap-4 bg-white p-8 shadow-md rounded-xl">
            <div className=" h-[600px] w-full">
              <img
                src={product?.images?.[0]?.url}
                alt="img"
                className="w-full object-contain h-full border"
              />
            </div>
            <div className="w-full h-[300px] flex gap-2">
              <img
                src={
                  product?.images?.length == 2
                    ? product?.images?.[1]?.url
                    : product?.images?.[0]?.url
                }
                alt="img"
                className="flex-1 object-contain border w-1/2 h-full"
              />
              <img
                src={
                  product?.images?.length === 3
                    ? product?.images?.[2]?.url
                    : product?.images?.[0]?.url
                }
                alt="img"
                className="flex-1 object-contain border w-1/2 h-full"
              />
            </div>
          </div>
          <div className="flex-1 flex-col bg-white p-8 shadow-md rounded-xl">
            <h2 className="font-semibold  pb-2 text-slate-800 md:text-xl text-md">
              {product?.title}
            </h2>
            <div className="flex gap-3 flex-col border-y pt-2 pb-4">
              <span className="font-semibold text-base">${product?.price}</span>
              <div className="flex gap-1 items-center">
                <ReactStars
                  count={5}
                  size={19}
                  edit={false}
                  value={parseInt(product?.totalrating) || 0}
                  activeColor="#ffd700"
                />
                <span className="text-sm text-gray-400">
                  {" "}
                  ({product?.ratings?.length} reviews)
                </span>
              </div>
              <Link to={"#"} className="text-sm text-gray-400">
                Write a review
              </Link>
            </div>
            <div className="flex gap-3 mt-4 items-center">
              <span className="font-semibold text-base">Type:</span>
              <Link
                to={"#"}
                className="text-sm  text-gray-500 hover:text-gray-900"
              >
                Watch
              </Link>
            </div>
            <div className="flex gap-3 mt-4 items-center">
              <span className="font-semibold text-base">Brand:</span>
              <Link
                to={"#"}
                className="text-sm  text-gray-500 hover:text-gray-900"
              >
                {product?.brand}
              </Link>
            </div>
            <div className="flex gap-3 mt-4 items-center">
              <span className="font-semibold text-base">Category:</span>
              <Link
                to={"#"}
                className="text-sm  text-gray-500 hover:text-gray-900"
              >
                {product?.category}
              </Link>
            </div>
            <div className="flex gap-3 mt-4 items-center">
              <span className="font-semibold text-base">Tags:</span>
              <Link
                to={"#"}
                className="text-sm  text-gray-500 hover:text-gray-900"
              >
                Popular
              </Link>
            </div>
            <div className="flex gap-3 my-4 items-center">
              <span className="font-semibold text-base">Availablity:</span>
              <Link
                to={"#"}
                className="text-sm  text-gray-500 hover:text-gray-900"
              >
                In stock
              </Link>
            </div>
            {user && !alreadyAddedToCart && (
              <>
                <div className="flex mt-4  gap-4">
                  <span className="font-semibold text-base">Color:</span>
                  <ul className="flex gap-2 flex-row">
                    {product?.color?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          style={{ backgroundColor: item.title }}
                          className={`${
                            color === item._id
                              ? "ring-4 ring-orange-400"
                              : "hover:opacity-80"
                          }  transition-all f  h-7 w-7 rounded-full cursor-pointer`}
                          onClick={() => setColor(item._id)}
                        ></li>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
            <div className="flex py-6 items-center gap-6">
              {user && !alreadyAddedToCart && (
                <>
                  <span className="font-semibold text-base">Quantity:</span>
                </>
              )}
              <div className="flex gap-3 items-center ">
                {user && !alreadyAddedToCart && (
                  <>
                    <input
                      type="number"
                      className="focus:outline-none w-14 text-gray-500 border p-2"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </>
                )}
                <button
                  type="submit"
                  className="hover:bg-orange-300 hover:text-slate-800 bg-slate-800 text-slate-200 px-8 py-3  rounded-full w-fit transition-all"
                  onClick={() => {
                    if (user && !alreadyAddedToCart) {
                      addCart({
                        quantity,
                        price: product?.price,
                        color,
                        product: product?._id,
                      });
                    } else {
                      navigate("/cart");
                    }
                  }}
                >
                  {user && !alreadyAddedToCart ? "Add to cart" : "Go to cart"}
                </button>
              </div>
            </div>

            <div>
              <div className="mt-6">
                <div className="py-3 border-b">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => onClickhandle(1)}
                  >
                    <span className="flex gap-x-3 items-center text-sm">
                      <CiDeliveryTruck size={20} />
                      Shipping & Returns
                    </span>
                    <IoIosArrowUp
                      className={`${
                        open === 1 ? "rotate-180" : "rotate-0"
                      } transition-all`}
                    />
                  </div>
                  {open === 1 && (
                    <div className={`pl-2 block mt-2 text-gray-500 text-xs `}>
                      Free shipping and returns available on all orders! <br />
                      We ship all US domestic orders within{" "}
                      <span className="text-gray-800 font-semibold">
                        5-10 business days!
                      </span>
                    </div>
                  )}
                </div>
                <div className="py-3 border-b">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => onClickhandle(2)}
                  >
                    <span className="flex gap-x-4 items-center text-sm">
                      <SiMaterialdesignicons size={15} />
                      Materials
                    </span>
                    <IoIosArrowUp
                      className={`${
                        open === 2 ? "rotate-180" : "rotate-0"
                      } transition-all`}
                    />
                  </div>
                  {open === 2 && (
                    <div className={`pl-2 block mt-2 text-gray-500 text-xs `}>
                      Running Shoes cushions your stride with soft foam to keep
                      you running in comfort. Lightweight knit material wraps
                      your foot in breathable support, while a minimalist design
                      fits in just about anywhere your day takes you.
                    </div>
                  )}
                </div>
                <div className="py-3 border-b">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => onClickhandle(3)}
                  >
                    <span className="flex gap-x-3 items-center text-sm">
                      <CiHeart size={20} />
                      Care Instructions
                    </span>
                    <IoIosArrowUp
                      className={`${
                        open === 3 ? "rotate-180" : "rotate-0"
                      } transition-all`}
                    />
                  </div>
                  {open === 3 && (
                    <div className={`pl-2 block mt-2 text-gray-500 text-xs `}>
                      Use a soft damp cloth and a drop of mild soap to remove
                      any haze. Air dry.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <h3 className="font-semibold mb-4 text-2xl text-gray-700">
            Description
          </h3>
          <div
            className="shadow-md bg-white p-6 text-gray-400 text-sm rounded-lg leading-7"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          ></div>
        </div>
        <div className="my-24">
          <h3 className="font-semibold mb-4 text-2xl  text-gray-700">
            Reviews
          </h3>
          <div className="shadow-md bg-white px-6 py-8 text-gray-400 text-sm rounded-lg leading-7">
            <h4 className=" text-gray-600 text-lg">Customer reviews</h4>
          </div>
        </div>
        <BestDeals where={"productPage"} />
      </section>
    </>
  );
}
