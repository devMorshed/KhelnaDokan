import React from "react";
import { FaSpinner } from "react-icons/fa";

const Spinner = ({ style }) => {
	return (
		<div
			className={`flex min-h-[calc(100vh-292px)] flex-col justify-center items-center ${style}`}>
			<div className="flex items-center justify-center w-full h-full">
				<FaSpinner size={250} className="animate-spin text-gray-200" />
			</div>
		</div>
	);
};

export default Spinner;
