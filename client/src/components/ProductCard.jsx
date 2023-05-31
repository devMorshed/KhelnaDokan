import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { myContext } from "../contextProvider/MyContextProvider";
import { toast } from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";

const ProductCard = ({product}) => {
  const { user } = useContext(myContext);
  
  const { _id, name, price, ratings, photo, details } = product;

	const navigate = useNavigate();
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleDetails = () => {
		if (user) {
			navigate(`/toy/${_id}`);
		} else {
			toast("You Have to log in first");
			navigate("/login");
		}
	};

	return (
		<div
			className="product-card bg-white rounded-lg shadow-lg p-4 mb-4"
			data-aos="fade-up">
			<img src={photo} alt={name} className="w-full max-w-[200px] mb-4" />
			<h2 className="text-xl font-bold mb-2">{name}</h2>
			<p className="text-gray-500 text-xs">{details}</p>
			<div className="mt-4 flex justify-between items-center">
				<div>
					<span className="text-gray-600 text-sm mr-2">Price:</span>
					<span className="text-green-600 font-bold">
						$ <span className="text-3xl">{price}</span>
					</span>
				</div>

				<div className="w-1/3">
          <Rating readOnly value={ratings} />
				</div>

				<button
					onClick={handleDetails}
					className="px-4 py-3 w-24 border rounded text-center"
					onMouseEnter={handleHover}
					onMouseLeave={handleMouseLeave}>
					{isHovered ? (
						<GrView
							data-aos="fade-out"
							className="mx-auto"
							size={24}
						/>
					) : (
						"Details"
					)}
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
