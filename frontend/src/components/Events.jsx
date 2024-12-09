import { useSelector } from "react-redux";
import EventCard from "./EventCard";

const Events = () => {
	const { products } = useSelector((state) => state.products);
	return (
		<div className="mb-28 ">
			<h3 className="text-2xl font-semibold ">Special Products</h3>
			<div className="grid grid-cols-1 md:grid-cols-2  gap-6 my-8 justify-center">
				{products?.map((item, index) => {
					if (item.tags === "Special") {
						return <EventCard key={index} product={item} />;
					}
				})}
			</div>
		</div>
	);
};

export default Events;
