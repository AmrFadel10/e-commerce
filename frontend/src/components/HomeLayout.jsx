import { Link } from "react-router-dom";
import BannerList from "./BannerList";

const HomeLayout = () => {
  return (
    <>
      <div className="py-8 flex gap-6 lg:flex-row flex-col">
        <Link
          to={"/products"}
          className="relative rounded-2xl overflow-hidden  md:h-96 lg:h-[500px] flex-1"
        >
          <img
            src={"/assets/images/banner.avif"}
            alt="banner"
            className="object-cover w-full h-full"
          />
          {/* <div className="absolute top-0  py-16 px-12 z-10 text-black">
            <p className="text-[#bf4800] text-sm md:text-base">
              SUPERCHARGED FOR PROS
            </p>
            <h1 className="font-semibold md:text-5xl text-xl my-8">
              IPad S13+ Pro.
            </h1>
            <p className="w-[60%] text-sm md:text-base text-gray-700">
              From $999.00 or $41.62/mo. for 24 mo. Footnote*
            </p>
            <Link
              to={"#"}
              className="rounded-full bg-[#212c3a] py-2 px-8 mt-8 inline-block text-slate-100 text-sm hover:bg-orange-300 hover:text-slate-800"
            >
              BUY NOW
            </Link>
          </div> */}
        </Link>
        <BannerList />
      </div>
    </>
  );
};

export default HomeLayout;
