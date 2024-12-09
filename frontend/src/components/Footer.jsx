import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950  text-slate-300 text-[12px] font-normal py-16">
      <div className="container mx-auto flex lg:gap-6 gap-4 justify-between flex-wrap px-2">
        <div className="lg:w-fit w-[45%]">
          <h3 className="text-xl font-bold mb-6">Conatct us</h3>
          <ul className="flex flex-col gap-3">
            <Link to={"#"} className="hover:text-orange-300">
              Mora store
            </Link>
            <div>
              <p>Menouf, Menofia</p>
              <p>Egypt</p>
            </div>
            <p>
              <a href="+201012345678" className="hover:text-orange-300">
                +201093900892
              </a>
            </p>
            <a href="demo@company.com" className="hover:text-orange-300">
              afadel1310@gmail.com
            </a>
          </ul>
        </div>
        <div className="lg:w-fit w-[45%]">
          <h3 className="text-xl font-bold mb-6">Information</h3>
          <ul className="flex flex-col gap-3">
            <Link to={"/privacy-policy"} className="hover:text-orange-300">
              Privacy policy
            </Link>
            <Link to={"/refund-policy"} className="hover:text-orange-300">
              Refund policy
            </Link>
            <Link to={"/shipping-policy"} className="hover:text-orange-300">
              Shipping policy
            </Link>
            <Link to={"/terms-condition"} className="hover:text-orange-300">
              Terms & Condition
            </Link>
            <Link to={"/blogs"} className="hover:text-orange-300">
              Blogs
            </Link>
          </ul>
        </div>
        <div className="lg:w-fit w-[45%]">
          <h3 className="text-xl font-bold mb-6">Account</h3>
          <ul className="flex flex-col gap-3">
            <Link to={"/contact"} className="hover:text-orange-300">
              Conatct
            </Link>

            <Link to={"/faq"} className="hover:text-orange-300">
              FAQ
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
