import React from "react";

const SelectField = ({
	Label,
	variant,
	value,
	options,
	onChange,
	disabled,
}) => {
	return (
		<div className="">
			<label
				className="block text-gray-700 font-bold mb-2"
				htmlFor={variant}>
				{Label}
			</label>
			<select
				className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id={variant}
				name={variant}
				value={value}
				onChange={onChange}
				disabled={disabled}>
				<option value="">Select {Label}</option>
				{options?.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}

				<option value="custom">None of these Category?</option>
			</select>
		</div>
	);
};

export default SelectField;
