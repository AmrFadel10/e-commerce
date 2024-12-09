import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
	const [active, setActive] = useState(0);
	const toggleTab = (tab) => {
		if (tab === active) {
			setActive(0);
		} else {
			setActive(tab);
		}
	};
	useEffect(() => {
		scrollTo(0, 0);
	}, []);
	return (
		<section className="my-8 min-h-[calc(100vh-260px)]">
			<h2 className="text-3xl font-bold text-gray-900 mb-4">FAQ</h2>
			<div className="border-b-2 border-gray-300 py-3 text-gray-500 my-4">
				<button
					className="w-full flex justify-between py-1 font-semibold"
					onClick={() => toggleTab(1)}
				>
					<span>How do i think my order?</span>
					<IoIosArrowUp
						size={25}
						className={`${
							active === 1 ? "rotate-0" : `rotate-180`
						} transition-all`}
					/>
				</button>
				{active === 1 && (
					<div className="text-gray-400 ">
						{`If you're not satisfied with your purchase, we accept returns within
						30 days of delivery. To initiate a return, please email us at
						support@myecommercestore.com with your order number and a brief
						explanation of why you're returning the item.`}
					</div>
				)}
			</div>
			<div className="border-b-2 border-gray-300 py-3 text-gray-500 my-4">
				<button
					className="w-full flex justify-between py-1 font-semibold"
					onClick={() => toggleTab(2)}
				>
					<span>How do I track my order?</span>
					<IoIosArrowUp
						size={25}
						className={`${
							active === 2 ? "rotate-0" : `rotate-180`
						} transition-all`}
					/>
				</button>
				{active === 2 && (
					<div className="text-gray-400 ">
						{`You can track your order by clicking the tracking link in your
						shipping confirmation email, or by logging into your account on our
						website and viewing the order details.`}
					</div>
				)}
			</div>
			<div className="border-b-2 border-gray-300 py-3 text-gray-500 my-4">
				<button
					className="w-full flex justify-between py-1 font-semibold"
					onClick={() => toggleTab(3)}
				>
					<span>How do I contact customer support?</span>
					<IoIosArrowUp
						size={25}
						className={`${
							active === 3 ? "rotate-0" : `rotate-180`
						} transition-all`}
					/>
				</button>
				{active === 3 && (
					<div className="text-gray-400 ">
						{`You can contact our customer support team by emailing us at
						support@myecommercestore.com, or by calling us at 010 1234 5678
						between the hours of 9am and 5pm EST, Monday through Friday.`}
					</div>
				)}
			</div>
			<div className="border-b-2 border-gray-300 py-3 text-gray-500 my-4">
				<button
					className="w-full flex justify-between py-1 font-semibold"
					onClick={() => toggleTab(4)}
				>
					<span>an I change or cancel my order?</span>
					<IoIosArrowUp
						size={25}
						className={`${
							active === 4 ? "rotate-0" : `rotate-180`
						} transition-all`}
					/>
				</button>
				{active === 4 && (
					<div className="text-gray-400 ">
						{`Unfortunately, once an order has been placed, we are not able to
						make changes or cancellations. If you no longer want the items
						you've ordered, you can return them for a refund within 30 days of
						delivery.`}
					</div>
				)}
			</div>
			<div className="border-b-2 border-gray-300 py-3 text-gray-500 my-4">
				<button
					className="w-full flex justify-between py-1 font-semibold"
					onClick={() => toggleTab(5)}
				>
					<span>Do you offer international shipping?</span>
					<IoIosArrowUp
						size={25}
						className={`${
							active === 5 ? "rotate-0" : `rotate-180`
						} transition-all`}
					/>
				</button>
				{active === 5 && (
					<div className="text-gray-400 ">
						{`Currently, we only offer shipping within the United States.`}
					</div>
				)}
			</div>
			<div className="border-b-2 border-gray-300 py-3 text-gray-500 my-4">
				<button
					className="w-full flex justify-between py-1 font-semibold"
					onClick={() => toggleTab(6)}
				>
					<span> What payment methods do you accept?</span>
					<IoIosArrowUp
						size={25}
						className={`${
							active === 6 ? "rotate-0" : `rotate-180`
						} transition-all`}
					/>
				</button>
				{active === 6 && (
					<div className="text-gray-400 ">
						{`We accept visa,mastercard,paypal payment method also we have cash on
						delivery system.`}
					</div>
				)}
			</div>
		</section>
	);
};

export default FAQ;
