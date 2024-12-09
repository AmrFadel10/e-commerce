import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activationAccount } from "../redux/apiCalls/Auth.ApiCall";
const Activation = () => {
	const { activationToken } = useParams();
	const dipatch = useDispatch();
	const { activationMessage, error } = useSelector((state) => state.user);

	useEffect(() => {
		dipatch(activationAccount(activationToken));
	}, []);

	return (
		<div className="w-full min-h-screen flex items-center justify-center">
			<p className="text-gray-700 text-sm font-semibold">
				{error ? "The token expired!" : activationMessage}
			</p>
		</div>
	);
};

export default Activation;
