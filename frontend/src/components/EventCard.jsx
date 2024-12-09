import ReactStars from "react-rating-stars-component";
import { IoIosShuffle } from "react-icons/io";
import {
	AiFillHeart,
	AiOutlineEye,
	AiOutlineHeart,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import EventTime from "./EventTime";
import { useState } from "react";

export default function EventCard({ product }) {
	const [open, setOpen] = useState(false);
	const [clickHeart, setClickHeart] = useState(false);
	return (
		<div className="rounded-3xl group shadow-sm bg-white flex overflow-hidden flex-col lg:flex-row ">
			<div className="relative overflow-hidden flex-1">
				<div className=" transition-all duration-300 hover:bg-orange-300 rounded-full p-1 absolute top-[2%] right-3">
					{clickHeart ? (
						<AiFillHeart
							className="transition-all hover:bg-orange-300 rounded-full cursor-pointer"
							size={20}
							onClick={() => setClickHeart(!clickHeart)}
							color="red"
							title="Remove from wishlist"
						/>
					) : (
						<AiOutlineHeart
							className="transition-all hover:bg-orange-300 rounded-full cursor-pointer"
							size={20}
							onClick={() => setClickHeart(!clickHeart)}
							color="#333"
							title="Add to wishlist"
						/>
					)}
				</div>
				<div className="min-h-[270px]">
					{/* <img
						src="assets/images/24_260x.avif"
						alt="music"
						className=" group-hover:hidden  object-cover"
					/> */}
					<img
						// src="assets/images/24-01_260x.avif"
						src={product?.images?.[0]?.url}
						alt="music"
						className=" group-hover:block block h-full  w-full"
					/>
				</div>
				<div className="absolute top-[12%] -right-6 flex gap-2 flex-col group-hover:right-3 transition-all  text-lg">
					<div className=" transition-all hover:bg-orange-300 rounded-full p-1">
						<IoIosShuffle
							size={20}
							className="cursor-pointer"
							color="#333"
							title="Compare between"
						/>
					</div>
					<div className=" transition-all hover:bg-orange-300 rounded-full p-1 flex justify-center items-center">
						<AiOutlineEye
							className="cursor-pointer"
							size={20}
							color="#333"
							title="Quick view"
							onClick={() => setOpen(!open)}
						/>
					</div>
				</div>
			</div>
			<div className="px-4 py-8 flex-1">
				<div className="text-red-700 font-medium text-xs my-4 ">
					{product?.brand}
				</div>
				<div className="my-2  text-md text-slate-900 font-medium line-clamp-2">
					{product?.title}
				</div>
				<ReactStars
					count={5}
					size={24}
					edit={false}
					value={parseInt(product?.totalrating)}
					activeColor="#ffd700"
				/>
				<div className="flex  justify-between mt-8">
					<div className="flex gap-4">
						<div className=" font-semibold">{product?.price}$</div>
						<sup className=" font-semibold text-red-600 text-base line-through">
							{product?.price * 1.2}
						</sup>
					</div>
					<div className="text-teal-500 font-semibold">
						{product?.sold} sold
					</div>
				</div>
				<EventTime />
			</div>
		</div>
	);
}
