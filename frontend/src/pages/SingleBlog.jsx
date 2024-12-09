import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { getABlog } from "../redux/apiCalls/blogs.ApiCall";
const SingleBlog = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { ablog } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getABlog({ id: getBlogId }));
  }, [getBlogId]);

  return (
    <>
      {/* <Meta title="Dynamic Blog Name" />
            <BreadCrumb title="Dynamic Blog Name" /> */}
      <section className="container py-8 mx-auto bg-zinc-50">
        <div className=" mx-auto w-full">
          <Link
            to="/blogs"
            className="flex items-center gap-4 mb-20 mt-8 hover:text-gray-950  text-gray-700 font-semibold"
          >
            <HiOutlineArrowLeft size={25} /> Go back to Blogs
          </Link>
          <h3 className="font-semibold text-2xl mb-16"> {ablog?.title}</h3>
          <img
            src={ablog?.image?.url}
            className="object-cover  my-4 max-h-[500px] mx-auto"
            alt="ablog"
          />
          <div
            className="text-gray-800  leading-10 md:px-8 px-3 mt-16"
            dangerouslySetInnerHTML={{ __html: ablog?.description }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
