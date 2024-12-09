import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { addWishlistApiCall } from "../redux/apiCalls/UserContains.ApiCall";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";

export default function WishlistCard({ item }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  const addToWishList = () => {
    dispatch(addWishlistApiCall({ id: item._id.toString(), token }));
  };
  return (
    <div className="group flex flex-col relative bg-white rounded-xl overflow-hidden">
      <span className="absolute top-3 right-3  hover:text-black text-gray-800 cursor-pointer rounded-sm">
        <RxCross1 size={28} onClick={addToWishList} />
      </span>
      <img
        src={item?.images?.[0]?.url}
        alt="img"
        className="w-full object-contain mx-auto  h-72"
      />
      <div className=" p-3">
        <Link
          to={"#"}
          className="font-medium line-clamp-2 mb-4 group-hover:underline pt-2"
        >
          {item.title}
        </Link>
        <div className="divide-y flex flex-col ">
          <div className="flex justify-between font-semibold">
            ${item.price}
          </div>
        </div>
      </div>
    </div>
  );
}
