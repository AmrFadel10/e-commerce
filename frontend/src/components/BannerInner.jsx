import { Link } from "react-router-dom";

export default function BannerInner({ item }) {
  return (
    <Link
      to={"/products"}
      className="relative rounded-xl overflow-hidden mx-auto"
    >
      <img src={item.img} alt="catbanner" className="max-w-full  h-full" />
      <div className="z-10 absolute top-0  px-8 py-12 flex justify-center flex-col gap-2">
        <p className="text-[#bf4800] font-normal">{item.title}</p>
        <h1 className="font-semibold text-xl">{item.subtitle}</h1>
        <p className="w-[64%] text-sm text-gray-700">{item.desc}</p>
      </div>
    </Link>
  );
}
