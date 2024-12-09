import { useEffect } from "react";
import EventCard from "../components/EventCard";

const EventsPage = () => {
	useEffect(() => {
		scrollTo(0, 0);
	}, []);
	return (
		<section className="grid grid-cols-1 md:grid-cols-2  gap-12 my-8">
			<EventCard />
			<EventCard />
		</section>
	);
};

export default EventsPage;
