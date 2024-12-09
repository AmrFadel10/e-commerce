export default function CustomInput({
	placeholder,
	type,
	id,
	className,
	name,
	required,
}) {
	return (
		<input
			placeholder={placeholder}
			type={type}
			id={id}
			required={required}
			className={`${className} my-2 p-3 bg-white text-gray-600 focus:outline-none  w-full border focus:border-gray-400 rounded-lg border-gray-300`}
			name={name}
		/>
	);
}
