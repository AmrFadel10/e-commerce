import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import SingleCart from "../components/SingleCart";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/apiCalls/Cart.ApiCall";
import { resetCart } from "../redux/slices/Cart.Slice";

export default function Cart() {
  const dispatch = useDispatch();
  const [finalPrice, setFinalPrice] = useState(0);
  const { token } = useSelector((state) => state.user);
  const { isDeleteSuccess, isAddedSuccess, isSuccess, isUpdateSuccess } =
    useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    scrollTo(0, 0);
    dispatch(getCart({ token }));
  }, []);

  useEffect(() => {
    if (isDeleteSuccess || isAddedSuccess || isUpdateSuccess) {
      dispatch(getCart({ token }));
      dispatch(resetCart());
    }
  }, [isAddedSuccess, isDeleteSuccess, isUpdateSuccess]);

  useEffect(() => {
    if (isSuccess || isAddedSuccess || isDeleteSuccess || isUpdateSuccess) {
      let result = 0;
      for (let i = 0; i < cart?.length; i++) {
        result += Number(cart?.[i]?.quantity) * Number(cart?.[i]?.price);
        setFinalPrice(result);
      }
    }
  }, [isSuccess, isAddedSuccess, isDeleteSuccess, isUpdateSuccess, cart]);

  return (
    <>
      {/* <Meta title={"Cart"} />
			<BreadCrumb title={"Cart"} /> */}
      <section className="mx-auto container ">
        <table className=" text-left my-12 border-b w-full">
          <thead className="text-xl border-b">
            <tr className="text-gray-500 flex">
              <th className="p-4  flex-[1.8]">PRODUCT</th>
              <th className="p-4 flex-1">PRICE</th>
              <th className="p-4 flex-1">QUANTITY</th>
              <th className="p-4 flex-1">TOTAL</th>
            </tr>
          </thead>
          <tbody className=" p-4 text-xl  divide-y">
            {cart?.map((item, index) => {
              return <SingleCart item={item} key={index} />;
            })}
          </tbody>
        </table>
        <div className="my-6">
          <Link
            className={
              "bg-slate-700 text-slate-200 py-3 px-8 block w-fit rounded-full hover:bg-slate-800"
            }
            to={"/products"}
          >
            Continue shopping
          </Link>
        </div>
        <div className="flex justify-between py-5">
          <p className="text-lg font-medium text-gray-500">
            Order special instructor
          </p>
          <div className="flex gap-4">
            <span className="text-2xl text-gray-500 font-semibold">
              Subtotal:{" "}
            </span>
            <span className="font-semibold text-xl text-gray-600">
              $ {finalPrice}
            </span>
          </div>
        </div>
        <div className="text-right  font-medium text-gray-500 my-4">
          Taxes and Shipping calculated at checkout
        </div>
        <Link
          to={"/checkout"}
          className={
            "bg-slate-700 text-slate-200 py-3 px-8 block text-center rounded-full hover:bg-slate-800 ml-auto mt-8 mb-32 w-[25%]"
          }
        >
          Check out
        </Link>
      </section>
    </>
  );
}
