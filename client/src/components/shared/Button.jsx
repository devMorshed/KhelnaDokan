import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ to, cclass, children }) => {
	return (
		<NavLink to={to}>
			<button
				className={`px-4 text-white duration-200 hover:scale-105 font-bold md:py-3 hover:bg-rose-600  rounded
			bg-rose-500 ${cclass}`}>
				{children}
			</button>
		</NavLink>
	);
};

export default Button;
