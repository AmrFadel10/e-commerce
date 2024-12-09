import { Helmet } from "react-helmet";

export default function Meta(props) {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>{props.title}</title>
		</Helmet>
	);
}
