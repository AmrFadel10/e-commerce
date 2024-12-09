import { useEffect } from "react";
import BlogCard from "../components/BlogCard";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
import ShopByCategories from "../components/ShopByCategories";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../redux/apiCalls/blogs.ApiCall";

export default function Blogs() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);
  useEffect(() => {
    scrollTo(0, 0);
    dispatch(getBlogs());
  }, []);
  return (
    <>
      {blogs?.length > 0 ? (
        <section className="container mx-auto my-8">
          <div className="flex gap-6 md:flex-row flex-col items-stretch">
            <div className="flex-1 hidden lg:block">
              <ShopByCategories />
            </div>
            <div className="flex-[5] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 md:gap-8 min-h-screen items-start">
              {blogs.map((item) => {
                return <BlogCard item={item} key={item._id} />;
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="container mx-auto my-8">
          <div className="flex gap-6 ">
            <div className="flex-1">
              <ShopByCategories />
            </div>
            <div className="flex h-screen w-full justify-center items-center">
              <span>No items provided!</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
