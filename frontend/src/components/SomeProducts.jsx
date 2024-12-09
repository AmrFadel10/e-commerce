import FamousCard from "./FamousCard";

const SomeProducts = () => {
	return (
		<div className=" my-14">
			<div className="grid  grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
				<FamousCard black={true} />
				<FamousCard />
				<FamousCard />
				<FamousCard />
			</div>
		</div>
	);
};

export default SomeProducts;
