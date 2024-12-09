import WishlistCard from "./WishlistCard";

export default function WishListCards({ wishlist }) {
	return (
		<>
			{wishlist?.length > 0 ? (
				<div className="py-8 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 min-h-screen items-start">
					{wishlist.map((item) => {
						return <WishlistCard item={item} key={item._id} />;
					})}
					{/* <WishlistCard />
			<WishlistCard />
			<WishlistCard />
			<WishlistCard />
			<WishlistCard /> */}
				</div>
			) : (
				<div className="flex h-screen w-full justify-center items-center">
					<span>No items provided!</span>
				</div>
			)}
		</>
	);
}
