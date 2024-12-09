import CompareProductCard from "./CompareProductCard";

export default function CompareList({ CompareProducts }) {
	return (
		<>
			{CompareProducts?.length > 0 ? (
				<div className="py-6 grid grid-cols-4 gap-5 container">
					{CompareProducts.map((ele, index) => (
						<CompareProductCard key={index} item={ele} />
					))}
				</div>
			) : (
				<div className="h-[calc(100vh-150px)]  flex justify-center items-center text-gray-500 font-semibold ">
					No product to compare yet!
				</div>
			)}
		</>
	);
}
