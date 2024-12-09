import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { categoryApiCall } from "../redux/apiCalls/category.ApiCall";

export default function ShopByCategories({ searchParams, setSearchParams }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(categoryApiCall());
	}, []);
	const { categories } = useSelector((state) => state.category);

	return (
		<div className="shadow rounded-xl bg-white p-4 w-full">
			<h4 className="md:mb-8 mb-2 text-sm md:text-lg font-semibold">
				Shop By Categories
			</h4>
			<ul className="flex flex-col gap-2">
				{categories?.map((item, index) => {
					return (
						<li
							key={index}
							className="text-xs md:text-sm text-gray-500 hover:text-gray-700 font-medium cursor-pointer"
							onClick={() =>
								setSearchParams({
									category: `${item.title}`,
									limit: 20,
									page: 1,
								})
							}
						>
							{item.title}
						</li>
					);
				})}

				{/* <Link
					to={"#"}
					className="text-sm text-gray-500 hover:text-gray-700 font-medium"
				>
					Tv
				</Link>
				<Link
					to={"#"}
					className="text-sm text-gray-500 hover:text-gray-700 font-medium"
				>
					Camera
				</Link>
				<Link
					to={"#"}
					className="text-sm text-gray-500 hover:text-gray-700 font-medium"
				>
					Laptop
				</Link> */}
			</ul>
		</div>
	);
}
