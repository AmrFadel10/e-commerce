import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import Meta from "../components/Meta";
// import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/apiCalls/Auth.ApiCall";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, isLoading } = useSelector((state) => state.user);

  const schema = z.object({
    email: z.string().email("This field must be email"),
    password: z.string().min(6, "Password must be above 6 characters"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  useEffect(() => {
    if (success) {
      navigate("/");
      location.reload();
    }
  }, [isLoading]);
  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Meta title={"Signin"} />
	<BreadCrumb title={"Signin"} /> */}
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-3">
        <h2 className="text-3xl font-extrabold text-gray-800 font-Roboto">
          Login to your account
        </h2>
        <div className="bg-white w-full max-w-md shadow rounded-xl py-6 md:px-8 px-6 mt-8 ">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="email"
                className="text-gray-700 text-sm font-medium block"
              >
                Email address:
              </label>
              <div className="">
                <input
                  type="text"
                  id="email"
                  className=" focus:ring-1 ring-blue-300 focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full placeholder-gray-400 appearance-none font-medium"
                  autoComplete="email"
                  {...register("email")}
                />
                {errors?.email?.message && (
                  <p className="text-red-500 text-sm ">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="password"
                className="text-gray-700 text-sm font-medium block"
              >
                Passowrd:
              </label>
              <div className="relative">
                <input
                  type={visible ? "text" : "password"}
                  id="password"
                  className=" focus:ring-1 ring-blue-300 focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full placeholder-gray-400 appearance-none font-medium"
                  autoComplete="current-password"
                  {...register("password")}
                />
                {visible ? (
                  <AiOutlineEye
                    size={25}
                    onClick={() => setVisible(false)}
                    className="right-2 top-2 absolute cursor-pointer"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    size={25}
                    onClick={() => setVisible(true)}
                    className="right-2 top-2 absolute cursor-pointer"
                  />
                )}
                {errors?.password?.message && (
                  <p className="text-red-500 text-sm ">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="/forgot-password"
                className="text-blue-500 hover:underline font-semibold text-sm hover:underline-offset-2 hover:text-blue-600"
              >
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className={`h-[40px] flex items-center justify-center text-white font-semibold bg-blue-500 w-full rounded-md hover:bg-blue-600 ${
                isLoading && "pointer-events-none opacity-70"
              }`}
            >
              Submit
            </button>
            <div className="flex items-center gap-2 font-medium w-full">
              <h4 className=" text-gray-600">{"Don't have any account"}</h4>
              <Link
                to={"/sign-up"}
                className="text-blue-500 hover:underline hover:text-blue-600"
              >
                Sign up
              </Link>
            </div>
          </form>
          <div className="flex gap-2 flex-col">
            <div>Email : demo@email.com</div>
            <div>password : 123456789</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

// try {
// 	const response = await request.post(
// 		"/auth/login",
// 		{ email, password },
// 		{ withCredentials: true }
// 	);
// 	if (response.data.success) {
// 		toast.success("Login successfully!");
// 		navigate("/");
// 	}
// } catch (error) {
// 	toast.error(error.response.data.message);
// }
