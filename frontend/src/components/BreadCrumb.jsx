import { Link } from "react-router-dom";

export default function BreadCrumb({ title }) {
	return (
		<div className="bg-white py-8">
			<div className="text-center container mx-auto font-semibold  ">
				<Link to={"/"} className="hover:text-orange-300">
					Home
				</Link>
				&nbsp; /&nbsp; <span className="text-2xl">{title}</span>
			</div>
		</div>
	);
}
