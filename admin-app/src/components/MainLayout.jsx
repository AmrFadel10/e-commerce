import { RiMenu2Fill } from "react-icons/ri";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { SiBrandfolder } from "react-icons/si";
import { MdOutlineFormatColorFill } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { CgNotes } from "react-icons/cg";
import { FaUsers } from "react-icons/fa6";
import { RiCouponLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";

export default function MainLayout() {
  const [toggleHeader, settoggleHeader] = useState(false);
  const [sideBar, setSideBar] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logouthandle = () => {
    dispatch(logout());
    navigate("/");
  };
  console.log(sideBar);
  return (
    <section className="flex relative">
      <aside
        className={`h-full  bg-slate-800 fixed box-border ${
          sideBar
            ? " left-0 top-0 h-full w-[1/3] sm:w-1/4 lg:w-[15%]"
            : "hidden"
        }`}
      >
        <div className="relative bg-slate-900 p-4 box-border flex justify-center">
          <img
            src="/favicon.png"
            className={` w-9 h-9  ${sideBar ? "block" : "hidden"}`}
          />
        </div>
        <ul
          className={`px-2 py-4 box-border flex flex-col gap-5 text-slate-50 md:text-sm text-xs overflow-y-auto md:h-[800px] h-[600px] `}
        >
          <h4 className="text-sm font-normal uppercase text-gray-400">
            Applications
          </h4>

          <NavLink
            to={"/admin"}
            className={"flex gap-2 items-start font-normal"}
          >
            <FaUsers size={20} />
            Customers
          </NavLink>

          <NavLink
            to={"/admin/products"}
            className={` transition-all font-normal  flex gap-2 items-start`}
          >
            <FiShoppingCart size={20} />
            Product List
          </NavLink>
          <NavLink
            to={"/admin/add-product"}
            className={` transition-all font-normal flex gap-2 items-start`}
          >
            <FiShoppingCart size={20} />
            Add product
          </NavLink>
          <NavLink
            to={"/admin/categories"}
            className={` transition-all font-normal flex gap-2 items-center`}
          >
            <BiCategory size={20} />
            Categories
          </NavLink>
          <NavLink
            to={"/admin/add-category"}
            className={` transition-all font-normal flex gap-2 items-center`}
          >
            <BiCategory size={20} />
            Add category
          </NavLink>
          <NavLink
            to={"/admin/brands"}
            className={` transition-all font-normal flex gap-2 items-center`}
          >
            <SiBrandfolder size={20} />
            Brand List
          </NavLink>
          <NavLink
            to={"/admin/add-brand"}
            className={` transition-all font-normal flex gap-2 items-center`}
          >
            <SiBrandfolder size={20} />
            Add brand
          </NavLink>
          <NavLink
            to={"/admin/colors"}
            className={` transition-all font-normal flex gap-2 items-start`}
          >
            <MdOutlineFormatColorFill size={20} />
            Colors List
          </NavLink>
          <NavLink
            to={"/admin/add-color"}
            className={` transition-all font-normal flex gap-2 items-start`}
          >
            <MdOutlineFormatColorFill size={20} />
            Add color
          </NavLink>

          <NavLink
            to={"/admin/coupons"}
            className={` transition-all font-normal  flex gap-2 items-start`}
          >
            <RiCouponLine size={20} />
            Coupon List
          </NavLink>
          <NavLink
            to={"/admin/add-coupon"}
            className={` transition-all font-normal flex gap-2 items-start`}
          >
            <RiCouponLine size={20} />
            Add coupon
          </NavLink>
          {/* </ul> */}
          <NavLink
            to={"/admin/orders"}
            className={"flex gap-2 items-start font-normal"}
          >
            <CgNotes size={20} />
            Orders
          </NavLink>

          <NavLink
            to={"/admin/add-blog"}
            className={` transition-all font-normal  flex gap-2 items-start`}
          >
            <ImBlog size={20} />
            Add blog
          </NavLink>
          <NavLink
            to={"/admin/blogs"}
            className={` transition-all font-normal flex gap-2 items-start`}
          >
            <FaBloggerB size={20} />
            Blogs list
          </NavLink>
          <NavLink
            to={"/admin/add-blog-category"}
            className={` transition-all font-normal flex gap-2 items-center`}
          >
            <ImBlog size={20} />
            Add blog category
          </NavLink>
          <NavLink
            to={"/admin/blog-category-list"}
            className={` transition-all font-normal flex gap-2 items-center`}
          >
            <FaBloggerB size={20} />
            Blog category list
          </NavLink>
          <NavLink
            to={"/admin/equiries"}
            className={"flex gap-2 items-start font-normal"}
          >
            <CgNotes size={20} />
            Equiries
          </NavLink>
        </ul>
      </aside>
      <main
        className={` min-h-screen flex flex-col box-border  ${
          sideBar
            ? "lg:ml-[15%] lg:w-[85%] sm:ml-[25%] sm:w-3/4 w-[66.66%]  ml-[33.33%]"
            : "ml-0 w-full"
        }`}
      >
        <header
          className={` box-border shadow w-full  flex justify-between h-[73px]  bg-white `}
        >
          <div className="flex items-center pl-7 cursor-pointer">
            <RiMenu2Fill size={25} onClick={() => setSideBar((pre) => !pre)} />
          </div>
          <div className="flex items-center p-0">
            <div className="relative">
              <div
                className="flex lg:gap-2 gap-1 cursor-pointer hover:bg-gray-300 px-1 lg:py-2 py-1 items-center"
                onClick={() => settoggleHeader((pre) => !pre)}
              >
                <img
                  src={user?.admin?.avatar?.url}
                  alt=""
                  className="md:w-10 w-8 md:h-10 h-8 rounded-lg"
                />
                <div>
                  <p className="font-semibold capitalize lg:text-sm text-xs">
                    {user?.admin?.name}
                  </p>
                  <p className="lg:text-sm text-xs text-gray-400 ">
                    {user?.admin?.email}
                  </p>
                </div>
                <ul
                  className={`absolute top-[60px] right-0  shadow bg-white  w-52 rounded-md ${
                    !toggleHeader ? "hidden" : "block"
                  }`}
                >
                  <li
                    className="hover:bg-gray-50 p-2 cursor-pointer border-t"
                    onClick={logouthandle}
                  >
                    Sign out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className=" box-border w-full min-h-full  p-4 overflow-auto bg-gray-50">
          <Outlet />
        </div>
      </main>
    </section>
  );
}
