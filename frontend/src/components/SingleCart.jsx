import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, updateCart } from "../redux/apiCalls/Cart.ApiCall";

const SingleCart = ({ item }) => {
	const dispatch = useDispatch();
	const [value, setValue] = useState(item?.quantity);
	const totalPrice = value * item?.price;
	const { token } = useSelector((state) => state.user);

	const handleDeleteProductFromCart = (id) => {
		dispatch(deleteCart({ token, cartId: id }));
	};

	const handleUpdateProductFromCart = () => {
		dispatch(updateCart({ quantity: value, cartId: item?._id, token }));
	};

	useEffect(() => {
		if (value !== null) {
			handleUpdateProductFromCart();
		}
	}, [value]);

	return (
		<tr className="flex ">
			<td className=" flex flex-[1.8] items-center p-4 gap-4 ">
				<img
					// src={"assets/images/24_150x.avif"}
					src={item?.product?.images?.[0].url}
					alt="music"
					className="w-24 h-24"
				/>
				<div>
					<p className="text-sm font-medium text-gray-600 line-clamp-2">
						{item?.product?.title}
					</p>
					{/* <p className="my-1">
						<span className="font-semibold text-sm">Size:</span>{" "}
						<span className="text-sm font-semibold">{item?.size}</span>
					</p> */}
					<p className="flex gap-2 mt-3">
						<span className="font-semibold text-base text-gray-600">
							Color :
						</span>{" "}
						<span
							style={{ backgroundColor: item?.color?.title }}
							className="  rounded-full  block w-6 h-6"
						></span>
					</p>
				</div>
			</td>
			<td className="text-lg font-semibold p-4 flex-1 text-gray-600">
				${item?.price}
			</td>
			<td className="gap-4 flex  items-center  p-4 flex-1">
				<div className="flex gap-2 items-center">
					<span className="w-12 focus:outline-none leading-[44px] h-10 border-gray-300 border text-center text-[16px] font-medium inline-block bg-gray-50">
						{value}
					</span>
					<div>
						<AiOutlinePlus
							size={5}
							className="w-4 h-4  text-center  bg-gray-200 border-gray-400 border cursor-pointer hover:bg-gray-200 mb-1"
							onClick={() => setValue(value + 1)}
						/>
						<AiOutlineMinus
							size={5}
							className="w-4 h-4   text-center  bg-gray-200 border-gray-400 border cursor-pointer hover:bg-gray-200"
							onClick={() => setValue(value === 1 ? 1 : value - 1)}
						/>
					</div>
				</div>
				<div>
					<span className="cursor-pointer text-red-500 hover:text-red-600 ">
						<MdDelete
							className="text-3xl "
							onClick={() => handleDeleteProductFromCart(item?._id)}
						/>
					</span>
				</div>
			</td>
			<td className="text-lg font-semibold p-4 flex-1 text-gray-600">
				<div>
					<span>{totalPrice}$</span>
				</div>
			</td>
		</tr>
	);
};

export default SingleCart;
