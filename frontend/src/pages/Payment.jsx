import { Link, useNavigate } from "react-router-dom";
// import Meta from "../components/Meta";
import { BsArrowLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import request from "../utils/baseUrl";
import toast from "react-hot-toast";

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

export default function Payment() {
  const navigate = useNavigate();
  const elements = useElements();
  const stripe = useStripe();
  const [orderInfo, setOrderInfo] = useState({});

  const { token, user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  //Shipping info
  const [shippingInfo, setShippingInfo] = useState({
    firstname: user?.name || "",
    lastname: "",
    address: "",
    state: "",
    city: "",
    country: "",
    pinecode: "",
    other: "",
  });

  useEffect(() => {
    scrollTo(0, 0);
    const info = JSON.parse(localStorage.getItem("orderInfo"));
    setOrderInfo(info);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    let allArr = [];
    orderInfo.cart.map((item) => {
      const one = {
        product: item.product._id,
        color: item.color._id,
        price: item.price,
        quantity: item.quantity,
      };
      allArr.push(one);
    });
    let order = {
      shippingInfo: orderInfo.shippingInfo,
      orderItems: allArr,
      totalPrice: Number((orderInfo.subTotal + orderInfo.shipping).toFixed(2)),
      totalPriceAfterDiscount: Number(orderInfo.totalPrice.toFixed(2)),
    };
    try {
      const { data } = await request.post("/payment/process", {
        amount: Math.round(orderInfo.totalPrice * 100),
      });
      if (!elements || !stripe) return;
      const result = await stripe.confirmCardPayment(data.client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });
      if (result.error) {
        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
            type: "Credit card",
          };
          const orderRes = await request.post("/order/", order, {
            headers: {
              Authorization: "bearer " + token,
            },
          });
          toast.success("Order Successful!");
          navigate("/");
          localStorage.removeItem("orderInfo");
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      {/* <Meta title={"Payment"} /> */}
      <section className=" mx-auto my-6 ">
        <div className="flex container  gap-8 ">
          <div className="flex-[3.5] py-12 px-12 bg-white rounded-xl shadow">
            <ul className="flex  text-gray-400 font-semibold gap-2 ">
              <li>Cart</li>&nbsp;{">"}&nbsp;
              <li>information & Shipping</li>&nbsp;{">"}&nbsp;
              <li className="text-gray-900">Payment</li>&nbsp;
            </ul>
            <h2 className="text-xl my-8 font-semibold w-fit">Payment</h2>

            <form className="flex flex-col gap-y-4" onSubmit={handlePayment}>
              <h3 className="text-xl mb-2"></h3>

              <div className="flex gap-6 w-full">
                <input
                  name="name"
                  placeholder="Name of card"
                  className="py-2 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700  font-extralight w-full"
                  value={orderInfo?.shippingInfo?.firstname || user?.name}
                  onChange={handleChange}
                />
                <CardExpiryElement
                  className="py-2 px-2 focus:outline-none border border-gray-300 rounded-lg  text-gray-700  font-extralight w-full leading-7"
                  options={{
                    style: {
                      base: {
                        color: "#444",
                        fontSize: "18px",
                      },
                      empty: {
                        "::placeholder": { color: "555" },
                      },
                    },
                  }}
                />
              </div>
              <div className="flex gap-6 w-full">
                <CardNumberElement
                  className="py-2 px-2 focus:outline-none border border-gray-300 rounded-lg  text-gray-700  font-extralight w-full leading-7"
                  options={{
                    style: {
                      base: {
                        color: "#444",
                        fontSize: "18px",
                      },
                      empty: {
                        "::placeholder": { color: "555" },
                      },
                    },
                  }}
                />

                <CardCvcElement
                  className="py-2 px-2 focus:outline-none border border-gray-300 rounded-lg  text-gray-700  font-extralight w-full leading-7"
                  options={{
                    style: {
                      base: {
                        color: "#444",
                        fontSize: "18px",
                      },
                      empty: {
                        "::placeholder": { color: "555" },
                      },
                    },
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <Link
                  to={"/checkout"}
                  className="text-lg text-slate-600 hover:text-slate-950 flex items-center gap-1 font-normal group"
                >
                  <span className="text-2xl font-semibold relative group-hover:right-1 right-0 transition-all duration-300">
                    <BsArrowLeft />
                  </span>
                  Return to checkout
                </Link>
                <button className="py-2 px-3 mt-4 hover:bg-slate-950 bg-slate-900 text-slate-100 rounded-lg">
                  Payment now!
                </button>
              </div>
            </form>
          </div>
          <div className="flex-[2] py-12 px-8 divide-y divide-gray-200 bg-white rounded-xl shadow">
            <div>
              {cart?.map((item, index) => {
                return (
                  <div
                    className=" border-gray-800 flex items-center gap-5  py-2 px-3"
                    key={index}
                  >
                    <div className="relative border border-gray-300 rounded-md">
                      <div className="w-5 h-5 flex items-center justify-center bg-orange-400 rounded-full absolute top-0 text-gray-900 -translate-y-1/2 translate-x-1/2 right-0 text-xs font-bold">
                        {item.quantity}
                      </div>
                      <img
                        src={item.product.images?.[0]?.url}
                        alt="img"
                        className="rounded-md w-32 h-14 object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-semibold line-clamp-2 mb-1 text-sm">
                        {item.product.title}
                      </p>
                      <div className="text-gray-600  text-sm font-semibold">
                        <span className=" text-gray-800">Color: </span>
                        &nbsp;
                        <span className="">{item.color.title}</span>
                      </div>
                      <div className="text-gray-600  text-sm font-semibold">
                        <span className=" text-gray-800">{item.quantity} </span>
                        &nbsp; x <span className="">{item.price}$</span>
                      </div>
                    </div>
                    <div className="font-bold text-sm">
                      {item.price * item.quantity}$
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="p-6 flex flex-col gapy-2 px-3">
              <div className="flex justify-between">
                <p className="text-gray-600 text-lg">Subtotal</p>
                <p className="font-semibold text-sm">$ {orderInfo?.subTotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600 text-lg">Shipping</p>
                <p className="font-semibold text-sm">
                  {" "}
                  + {Number(orderInfo?.shipping).toFixed(2)}$
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600 text-lg">Discount</p>
                <p className="font-semibold text-sm">
                  {" "}
                  - {Number(orderInfo?.discount).toFixed(2)}$
                </p>
              </div>
            </div>
            <div className="flex justify-between p-6">
              <p className="text-gray-600 text-lg font-semibold">Total</p>
              <div className=" text-sm flex gap-2 items-end">
                <span className="text-gray-600 font-semibold">USD</span>
                <span className="text-2xl font-semibold text-gray-700">
                  ${Number(orderInfo?.totalPrice).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
