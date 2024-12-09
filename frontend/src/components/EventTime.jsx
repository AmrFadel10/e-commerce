import { useEffect, useState } from "react";

const EventTime = () => {
	const [timeLeft, setTimeLeft] = useState(runTimeFun());
	useEffect(() => {
		const handleTime = setTimeout(() => {
			setTimeLeft(runTimeFun());
		}, 1000);
		return () => clearTimeout(handleTime);
	}, [timeLeft]);

	function runTimeFun() {
		const difference = new Date("2024 6 28").getTime() - new Date().getTime();
		let time = {};
		if (difference > 0) {
			time = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / (1000 * 60)) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return time;
	}
	function componentTime() {
		return Object.keys(timeLeft).map((ele, index) => {
			return (
				<div key={index}>
					<span className="text-slate-100 bg-red-600 font-semibold text-sm rounded-full w-8 h-8 flex items-center justify-center">
						{timeLeft[ele] > 9 ? timeLeft[ele] : `0${timeLeft[ele]}`}
					</span>
					<span className="text-sm capitalize">{ele} </span>
				</div>
			);
		});
	}
	return (
		<div className="text-gray-500 flex gap-4 items-center font-semibold my-2 mt-10">
			{componentTime().length ? (
				componentTime()
			) : (
				<span className="text-lg capitalize text-red-600">Time's up! </span>
			)}
		</div>
	);
};

export default EventTime;
// const componentTime = () => {
// 	Object.keys(timeLeft).map((ele) => {
// 		if (!timeLeft[ele]) {
// 			return null;
// 		}
// 		return <span></span>;
// 	});
// };
