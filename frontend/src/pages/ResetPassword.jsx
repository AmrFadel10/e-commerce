// import Meta from "../components/Meta";
// import BreadCrumb from "../components/BreadCrumb";
import { useState } from "react";
import toast from "react-hot-toast";
import request from "../utils/baseUrl";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ResetPassword() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "") return toast.error("Password field is empty!");
    try {
      await request.post(`/auth/reset-password/${token}`, {
        password,
      });
      toast.success("Password has been changed successfully!");
      navigate("/login");
    } catch (error) {
      return toast.error(error.response.data.message);
    }
  };
  return (
    <>
      {/* <Meta title={"Reset Password"} />
			<BreadCrumb title={"Reset Password"} /> */}
      <section className="container mx-auto py-24 ">
        <div className="shadow-md bg-white p-8 max-w-[550px] mx-auto rounded-xl ">
          <h2 className="text-gray-500 text-center text-xl font-medium mb-5">
            Reset Password
          </h2>
          <form className="flex flex-col gap-4 mb-3" onSubmit={handleSubmit}>
            <input
              type={"password"}
              placeholder={"Password"}
              name={"password"}
              value={password}
              className={` my-2 p-3 bg-white text-gray-600 focus:outline-none  w-full border focus:border-gray-400 rounded-lg border-gray-300`}
              onChange={handleChange}
            />
            {/* <CustomInput
							type={"password"}
							placeholder={"Confirm password"}
							name={"confirm-password"}
							required={true}
						/> */}

            <button
              type="submit"
              className="hover:bg-orange-300 hover:text-slate-800 bg-slate-800 text-slate-200 px-8 py-3 mt-5 rounded-full w-fit transition-all mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
