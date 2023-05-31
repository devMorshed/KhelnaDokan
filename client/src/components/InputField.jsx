import React from "react";

const InputField = ({
  changeHandler,
  Label,
  value,
  variant,
  customClass,
  type = "text",
}) => {
  return (
    <div className={customClass}>
			<label className="block font-bold mb-1" htmlFor={variant}>
				{Label}
			</label>
			<input
				className="w-full p-2 border border-gray-300 rounded"
				type={type}
				id={variant}
				name={variant}
				value={value}
				onChange={changeHandler}
			/>
		</div>
	);
};

export default InputField;
