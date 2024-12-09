import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addCompareProductsApiCall } from "../redux/apiCalls/UserContains.ApiCall";

export default function CompareProductCard({ item }) {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.user);

	return (
		<div className="group flex flex-col relative bg-white rounded-xl min-h-[calc(100vh-150px)]">
			<span
				className="absolute top-3 right-3  hover:text-gray-900 text-gray-600 cursor-pointer rounded-sm"
				onClick={() => {
					dispatch(
						addCompareProductsApiCall({ id: item._id.toString(), token })
					);
				}}
			>
				<IoCloseOutline className="text-3xl" />
			</span>
			<img
				src={item.images?.[0]?.url}
				alt="img"
				className=" object-contain h-60 rounded-t-xl"
			/>
			<div className=" p-3">
				<Link
					to={"#"}
					className="font-medium line-clamp-2 mb-4 group-hover:underline pt-2"
				>
					{item.title}
				</Link>
				<div className="divide-y flex flex-col ">
					<div className="flex justify-between">${item.price}</div>
					<div className="flex justify-between py-3">
						<span className="font-semibold text-base ">Brand &nbsp;:</span>
						<span className=" text-sm ">{item.brand}</span>
					</div>

					<div className="flex justify-between py-3">
						<span className="font-semibold text-base ">
							Availability &nbsp;:
						</span>
						<span className=" text-sm ">
							{item.sold > 0 ? "In stock" : "Not available"}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
