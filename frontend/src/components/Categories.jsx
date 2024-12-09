import { LuBadgePercent, LuHeadphones } from "react-icons/lu";
import { categoriesData } from "../static/data";
import { Link } from "react-router-dom";
import { GoGift } from "react-icons/go";
import { BsTruck } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";

const Categories = () => {
  return (
    <>
      <div className="p-12 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4    mx-auto xl:grid-cols-5">
        <div className="flex items-center gap-6  rounded-xl shadow bg-gray-50 py-4 px-4 mx-auto w-full">
          <BsTruck className="text-3xl" />
          <div>
            <h6 className="text-sm font-semibold">Free Shipping</h6>
            <p className="text-gray-500 text-xs">From all orders over $100</p>
          </div>
        </div>
        <div className="flex items-center gap-6 rounded-xl shadow bg-gray-50 py-4 px-4 mx-auto w-full">
          <GoGift className="text-3xl " />
          <div>
            <h6 className="text-sm font-semibold">Daily Surprise Offers</h6>
            <p className="text-gray-500 text-xs">Save up to 25% off</p>
          </div>
        </div>
        <div className="flex items-center gap-6 rounded-xl shadow bg-gray-50 py-4 px-4 mx-auto w-full">
          <LuHeadphones className="text-3xl " />
          <div>
            <h6 className="text-sm font-semibold">Support 24/7</h6>
            <p className="text-gray-500 text-xs">Shop with an expert</p>
          </div>
        </div>
        <div className="flex items-center gap-6 rounded-xl shadow bg-gray-50 py-4 px-4 mx-auto w-full">
          <LuBadgePercent className="text-3xl " />
          <div>
            <h6 className="text-sm font-semibold">Affordable Prices</h6>
            <p className="text-gray-500 text-xs">Get Factory direct price</p>
          </div>
        </div>
        <div className="flex items-center gap-6 rounded-xl shadow bg-gray-50 py-4 px-4 mx-auto w-full">
          <CiCreditCard1 className="text-4xl " />
          <div>
            <h6 className="text-sm font-semibold">Secure Payments</h6>
            <p className="text-gray-500 text-xs">100% Protected Payments</p>
          </div>
        </div>
      </div>
      {/* <div className=" mb-16 py-10">
				<div className=" grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5  p-4  mx-auto rounded-xl shadow gap-3 bg-white">
					{categoriesData?.map((item, index) => {
						return (
							<Link
								to={`/products?category=${item.title.toLowerCase()}}`}
								key={index}
								className="flex py-2 px-6 items-center justify-between hover:bg-gray-200 rounded-md "
							>
								<div>
									<h6 className="capitalize font-medium">{item.title}</h6>
									<span className="mt-2 text-gray-500 text-xs">8 items</span>
								</div>
								<div className="w-20">
									<img
										src={item.image_Url}
										alt="img"
										className="object-cover"
									/>
								</div>
							</Link>
						);
					})}
				</div>
			</div> */}
    </>
  );
};

export default Categories;
