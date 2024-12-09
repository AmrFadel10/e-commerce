// import Meta from "../components/Meta";
// import BreadCrumb from "../components/BreadCrumb";
import request from "../utils/baseUrl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") return toast.error("Email field is empty!");
    try {
      await request.post(`/auth/forgot-password`, {
        email,
      });
      toast.success("We send a message to you email, please check!");
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };
  return (
    <>
      {/* <Meta title={"forgot email"} /> */}
      {/* <BreadCrumb title={"Forget password"} /> */}
      <section className="my-24 ">
        <div className="shadow-md bg-white p-8 max-w-[550px] mx-auto rounded-xl ">
          <h2 className="text-gray-500 text-center text-xl font-medium mb-5">
            Forget Your password
          </h2>
          <p className="my-4 text-gray-600 text-sm text-center">
            We will send you an email to reset your password
          </p>
          <form className="flex flex-col gap-4 mb-3" onSubmit={handleSubmit}>
            <input
              type="email"
              className="p-3 bg-gray-100 text-gray-600 focus:outline-none focus:bg-gray-100"
              placeholder="Email"
              value={email}
              // className={` my-2 p-3 bg-white text-gray-600 focus:outline-none  w-full border focus:border-gray-400 rounded-lg border-gray-300`}
              onChange={handleChange}
            />
            <div className="flex flex-col items-center gap-2">
              <button
                type="submit"
                className="hover:bg-orange-300 hover:text-slate-800 bg-slate-800 text-slate-200 px-8 py-3 mt-5 rounded-full w-fit transition-all"
              >
                Submit
              </button>
              <Link
                to={"/login"}
                className=" px-8 py-3 rounded-full w-fit transition-all"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
