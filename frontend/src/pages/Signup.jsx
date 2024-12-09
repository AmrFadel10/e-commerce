import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/apiCalls/Auth.ApiCall";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

const Signup = () => {
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();
  const { success, isLoading, error, createdMessage } = useSelector(
    (state) => state.user
  );

  const schema = z.object({
    fullname: z.string().min(2, "Full name must be above 6 characters"),
    email: z.string().email("This field must be email"),
    password: z.string().min(6, "Password must be above 6 characters"),
    image: z
      .any()
      .refine((file) => file.length > 0, "No photo provided!")
      .refine(
        (file) =>
          ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
            file?.[0]?.type
          ),
        "Just photo accept!"
      ),
  });
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("image", avatar);

    dispatch(signup(formData));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-3">
      <h2 className="text-3xl font-extrabold text-gray-800 font-Roboto">
        Register as a new user
      </h2>
      <div className="bg-white w-full max-w-md shadow rounded-xl py-6 md:px-8 px-6 mt-8">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="fullname"
              className="text-gray-500 text-sm font-bold block"
            >
              Full name
            </label>
            <div className="">
              <input
                type="text"
                id="fullname"
                className="focus:ring-1 ring-blue-300 focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full placeholder-gray-400 appearance-none font-medium"
                autoComplete="fullname"
                {...register("fullname")}
              />
              {errors?.fullname?.message && (
                <p className="text-red-500 text-sm">
                  {errors.fullname.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="email"
              className="text-gray-500 text-sm font-bold block"
            >
              Email address:
            </label>
            <div className="">
              <input
                type="text"
                id="email"
                className="focus:ring-1 ring-blue-300 focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full placeholder-gray-400 appearance-none font-medium"
                autoComplete="email"
                {...register("email")}
              />
              {errors?.email?.message && (
                <p className="text-red-500 text-sm ">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="password"
              className="text-gray-500 text-sm font-bold block"
            >
              Password:
            </label>
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                id="password"
                className="focus:ring-1 ring-blue-300 focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full placeholder-gray-400 appearance-none font-medium"
                autoComplete="current-password"
                {...register("password")}
              />
              {errors?.password?.message && (
                <p className="text-red-500 text-sm ">
                  {errors.password.message}
                </p>
              )}
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
            </div>
          </div>
          <div className="flex  items-center gap-x-4">
            <span className="w-8 h-8 rounded-full inline-block overflow-hidden">
              {avatar ? (
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="avatar"
                  className="object-cover w-full h-full"
                />
              ) : (
                <RxAvatar className="w-8 h-8" />
              )}
            </span>
            <label
              htmlFor="file-input"
              className="border-2 rounded-lg block px-3 py-2 cursor-pointer text-sm font-bold text-gray-600 shadow-sm hover:bg-gray-50"
            >
              <span>Upload a file</span>
              <input
                type="file"
                id="file-input"
                accept="image/*"
                {...register("image")}
                onChange={handleFileInputChange}
                className="sr-only"
              />
            </label>
            {errors?.image?.message && (
              <p className="text-red-500 text-sm ">{errors.image.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={`h-[40px] flex items-center justify-center text-white font-semibold bg-blue-500 w-full rounded-md hover:bg-blue-600${
              isLoading && "pointer-events-none cursor-not-allowed opacity-70"
            }`}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
          <div className="flex items-center gap-2 font-medium w-full">
            <h4 className="text-gray-600">Already have an account</h4>
            <Link
              to={"/login"}
              className="text-blue-500 hover:underline hover:text-blue-600"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
