import { Link, useNavigate } from "react-router-dom";
// import Meta from "../components/Meta";
import { BsArrowLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../redux/apiCalls/Cart.ApiCall";
import axios from "axios";
import request from "../utils/baseUrl";
import toast from "react-hot-toast";

export default function Checkout() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [subTotal, setSubTotal] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	const [shipping, setShipping] = useState(0);
	const [discount, setDiscount] = useState(0);
	const [couponData, setCouponData] = useState(0);
	const [coupon, setCoupon] = useState("");
	const { token, user } = useSelector((state) => state.user);
	const { isDeleteSuccess, isAddedSuccess, isSuccess, cart } = useSelector(
		(state) => state.cart
	);
	//Shipping info
	const [shippingInfo, setShippingInfo] = useState({
		firstName: user?.name,
		lastName: "",
		address: "",
		state: "",
		city: "",
		country: "",
		pineCode: "",
		other: "",
	});

	useEffect(() => {
		scrollTo(0, 0);
		if (user) {
			dispatch(getCart({ token }));
		}
	}, [isDeleteSuccess, isAddedSuccess, user]);

	useEffect(() => {
		if (isSuccess || isAddedSuccess || isDeleteSuccess) {
			let result = 0;
			for (let i = 0; i < cart?.length; i++) {
				result += Number(cart?.[i]?.quantity) * Number(cart?.[i]?.price);
				setSubTotal(result);
				setShipping(Number((result * 0.1).toFixed(2)));
				setTotalPrice(result + Number((result * 0.1).toFixed(2)));
			}
		}
	}, [isSuccess, isAddedSuccess, isDeleteSuccess]);

	const submitHandler = async () => {
		if (coupon === "") {
			toast.error("Write your coupon !");
			return false;
		}
		try {
			const { data } = await request.get(`/coupon/${coupon}`);
			setCouponData(data);
			setDiscount((data.discount * subTotal) / 100);
			setTotalPrice(subTotal + shipping - (data.discount * subTotal) / 100);
			return;
		} catch (error) {
			return toast.error(error.response.data.message);
		}
	};
	// useEffect(() => {
	// 	// if (subTotal || shipping) {
	// 	setTotalPrice(subTotal + shipping);
	// 	// }
	// }, [discount]);
	const handleSubmit = (e) => {
		e.preventDefault();
		const orderInfo = {
			shippingInfo,
			totalPrice,
			discount,
			subTotal,
			shipping,
			cart,
		};
		localStorage.setItem("orderInfo", JSON.stringify(orderInfo));
		navigate("/payment");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setShippingInfo({ ...shippingInfo, [name]: value });
	};
	return (
		<>
			{/* <Meta title={"Checkout"} /> */}
			<section className=" mx-auto my-6 ">
				<div className="flex container  gap-8 ">
					<div className="flex-[3.5] py-12 px-12 bg-white rounded-xl shadow">
						<ul className="flex  text-gray-400 font-semibold gap-2 ">
							<li>Cart</li>&nbsp;{">"}&nbsp;
							<li className="text-gray-900">information & Shipping</li>&nbsp;
							{">"}&nbsp;
							<li>Payment</li>&nbsp;
						</ul>
						<h2 className="text-xl my-8 font-semibold  w-fit">
							Shipping / Information
						</h2>
						<form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
							<h3 className="text-xl mb-2"></h3>
							<select
								name="country"
								className="py-2 px-3 focus:outline-none border border-gray-300 rounded-lg w-full text-gray-700 text-lg"
								value={shippingInfo.country}
								onChange={handleChange}
							>
								<option value="" disabled>
									select country
								</option>
								<option value="Egypt">Egypt</option>
								<option value="saudi arabia">Saudi arabia</option>
								<option value="Emaraite">Emaraite</option>
							</select>
							<div className="flex gap-6 w-full">
								<input
									name="firstName"
									placeholder="First name (optional)"
									className="py-2 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700 text-lg font-extralight w-full"
									value={shippingInfo.firstName}
									onChange={handleChange}
								/>
								<input
									name="lastName"
									placeholder="Last name (optional)"
									className="py-2 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700 text-lg font-extralight w-full"
									value={shippingInfo.lastName}
									onChange={handleChange}
								/>
							</div>
							<input
								name="address"
								placeholder="Address"
								className="py-2 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700 text-lg font-extralight w-full"
								value={shippingInfo.address}
								onChange={handleChange}
							/>
							<input
								name="other"
								placeholder="Apartment, suite, etc. (optional)"
								className="py-2 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700 text-lg font-extralight w-full"
								value={shippingInfo.other}
								onChange={handleChange}
							/>
							<div className="flex gap-6 w-full">
								<input
									name="city"
									placeholder="City"
									className="py-2 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700 text-lg font-extralight w-full"
									value={shippingInfo.city}
									onChange={handleChange}
								/>

								<select
									name="state"
									className="py-2 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700 text-lg font-extralight w-full"
									value={shippingInfo.state}
									onChange={handleChange}
								>
									<option value="" disabled>
										Select state
									</option>
									<option value="Egypt">Egypt</option>
									<option value="saudi arabia">Saudi arabia</option>
									<option value="Emaraite">Emaraite</option>
								</select>
								<input
									name="pineCode"
									placeholder="ZIP code"
									className="py-2 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700 text-lg font-extralight w-full"
									value={shippingInfo.pineCode}
									onChange={handleChange}
								/>
							</div>
							<div className="flex items-center justify-between">
								<Link
									to={"/cart"}
									className="text-lg text-slate-600 hover:text-slate-950 flex items-center gap-1 font-normal group"
								>
									<span className="text-2xl font-semibold relative group-hover:right-1 right-0 transition-all duration-300">
										<BsArrowLeft />
									</span>
									Return to cart
								</Link>
								<button className="py-2 px-3 mt-4 hover:bg-slate-950 bg-slate-900 text-slate-100 rounded-lg">
									Go to payment
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
								<p className="font-semibold text-sm">$ {subTotal}</p>
							</div>
							<div className="flex justify-between">
								<p className="text-gray-600 text-lg">Shipping</p>
								<p className="font-semibold text-sm"> + {shipping}$</p>
							</div>
							<div className="flex justify-between">
								<p className="text-gray-600 text-lg">Discount</p>
								<p className="font-semibold text-sm"> - {discount}$</p>
							</div>
						</div>
						<div className="flex justify-between p-6">
							<p className="text-gray-600 text-lg font-semibold">Total</p>
							<div className=" text-sm flex gap-2 items-end">
								<span className="text-gray-600 font-semibold">USD</span>
								<span className="text-2xl font-semibold text-gray-700">
									${totalPrice.toFixed(2)}
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-6 border-t border-gray-500 pt-8">
							<input
								type="text"
								value={coupon}
								onChange={(e) => setCoupon(e.target.value)}
								placeholder="Coupon..."
								className="p-2 focus:outline-none border rounded-md border-gray-300 font-semibold text-sm"
							/>
							<button
								className="bg-orange-400 w-fit py-2 px-4 text-gray-50 rounded-md hover:bg-orange-500 "
								onClick={submitHandler}
							>
								Apply
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
