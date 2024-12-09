import {
  AiOutlineLogout,
  AiOutlineMessage,
  AiOutlineUser,
} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { PiAddressBook } from "react-icons/pi";
import { MdOutlineTrackChanges } from "react-icons/md";
const ProfileSideBar = ({ setActive, active }) => {
  const sidebarContent = [
    {
      Icon: AiOutlineUser,
      name: "Profile",
    },
    {
      Icon: HiOutlineShoppingBag,
      name: "Orders",
    },
  ];
  return (
    <div className="flex-1 bg-white rounded-xl px-4 py-8 flex-col gap-y-8 flex shadow">
      {sidebarContent?.map((item, index) => {
        return (
          <div
            className={`flex gap-x-2 ${
              index === active
                ? "text-orange-600 "
                : " hover:text-gray-950 hover:pl-2"
            } cursor-pointer text-gray-700 transition-all`}
            key={index}
            onClick={() => setActive(index)}
          >
            <item.Icon size={20} />
            <span className="font-medium">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileSideBar;
