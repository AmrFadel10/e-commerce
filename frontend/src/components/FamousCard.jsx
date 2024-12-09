import { Link } from "react-router-dom";

export default function FamousCard({ black }) {
  return (
    <Link
      to={"/products"}
      className={`  relative rounded-xl overflow-hidden group shadow-lg ${
        black ? "text-slate-950" : " text-slate-50"
      }`}
    >
      <div className="px-6 py-12  absolute top-0 left-0 z-10">
        <p className="text-gray-600  text-sm uppercase">smartphones</p>
        <h5 className="my-2  text-2xl text-slate-900 font-medium line-clamp-1">
          600 nits of brightness.
        </h5>
        <p className="line-clamp-2 text-slate-500 text-lg">
          27-inch 5K Retina display
        </p>
      </div>
      <div className="w-full h-full">
        <img
          src="assets/images/subbanner-03.webp"
          alt="music"
          className="object-cover group-hover:scale-110 duration-300 "
        />
      </div>
    </Link>
  );
}
