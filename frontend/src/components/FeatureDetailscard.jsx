import { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const FeatureDetailsCard = ({
  setOpen,
  product,
  addToWishList,
  wishlistId,
}) => {
  const [count, setCount] = useState(1);
  const [clickHeart, setClickHeart] = useState(false);
  //   const [select, setSelect] = useState(false);

  const increamentHandler = () => {
    setCount(count + 1);
  };

  const decreamentHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="bg-[#fff]">
      {product ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[rgba(0,0,0,0.66)] z-50 flex items-center justify-center">
          <div className="w-[90%] md:w-[60%] h-[90vh] overflow-y-scroll md:h-[75vh] rounded-md shadow-sm  p-4 bg-gray-100">
            <RxCross1
              size={30}
              className="sticky left-full top-0 z-[51] cursor-pointer hover:text-red-600"
              onClick={() => setOpen(false)}
            />

            <div className="block w-full md:flex gap-6">
              <div className="w-full md:w-[50%]">
                <img src={`${product?.images?.[0]?.url}`} alt="" />
                <div className="flex"></div>
                <div
                  className={`w-[150px]  my-3 flex items-center justify-center rounded-xl cursor-pointer bg-[#000] mt-4  h-11`}
                >
                  <span className="text-[#fff] flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
                <h5 className="text-[16px] text-[red] mt-5">
                  ({product?.sold}) Sold out
                </h5>
              </div>

              <div className="w-full md:w-[50%] pt-5 pl-[5px] pr-[5px]">
                <h1 className={` font-[600] font-Roboto text-[#333] mb-12`}>
                  {product?.title}
                </h1>
                <p
                  className="text-gray-600 font-"
                  dangerouslySetInnerHTML={{ __html: product?.description }}
                ></p>

                <div className="flex pt-3">
                  <h4 className="font-bold text-[18px] text-[#333] font-Roboto">
                    {product?.price}$
                  </h4>
                  <h3 className="font-[500] text-[16px] text-[#d55b45] pl-3 mt-[-4px] line-through">
                    {product?.price ? product?.price * 1.2 + "$" : null}
                  </h3>
                </div>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div className="flex">
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l  w-10 h-10 flex items-center justify-center shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decreamentHandler}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium  w-10 h-10 flex items-center justify-center">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l  w-10 h-10 flex items-center justify-center shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={increamentHandler}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {wishlistId?.includes(product?._id) ? (
                      <AiFillHeart
                        className="transition-all  rounded-full cursor-pointer"
                        size={30}
                        onClick={() => {
                          addToWishList();
                        }}
                        color="red"
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        className="transition-all  rounded-full cursor-pointer"
                        size={30}
                        onClick={() => {
                          addToWishList();
                        }}
                        color="#333"
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`w-[150px] bg-black h-[50px] my-3  justify-center cursor-pointer mt-6 rounded-md h-11 flex items-center`}
                >
                  <span className="text-[#fff] flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FeatureDetailsCard;
