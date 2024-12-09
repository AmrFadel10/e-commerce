import { categoriesData } from "../static/data";
import { Link, useNavigate } from "react-router-dom";

const DropDown = ({ setShowDropDown, categories }) => {
	const navigate = useNavigate();
	const clickHandler = (item) => {
		navigate(`/products?category=${item?.title.replace(/\s+/g, "-")}`);
		setShowDropDown(false);
		scrollTo(0, 0);
	};
	return (
		<ul className="absolute top-full left-0 lg:w-60 w-36 divide-y divide-[#3b4149] bg-[#131921] transition-all rounded-b-lg overflow-hidden select-none">
			{categories?.map((item, index) => {
				return (
					<div
						key={index}
						onClick={() => clickHandler(item)}
						className="pl-3 py-4 text-xs block  hover:pl-[18px] transition-all hover:text-orange-300 cursor-pointer"
					>
						{item?.title}
					</div>
				);
			})}
		</ul>
	);
};

export default DropDown;
