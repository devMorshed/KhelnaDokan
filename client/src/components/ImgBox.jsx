import React from "react";

const ImgBox = ({ position, img }) => {
	return (
		<div
			
			className={`absolute  hover:scale-150 duration-200 h-40 w-40 lg:h-60 lg:w-60 rounded-lg  hover:z-50 hover:border-[5px] border-orange-500 hover:shadow-xl  ${position}`}>
			<img className="w-full h-full object-cover" src={img} alt="" />
		</div>
	);
};

export default ImgBox;
