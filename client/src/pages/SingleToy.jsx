import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import useTitle from "../hooks/useTitle";

const SingleToy = () => {
  useTitle("Details")
  
	const data = useLoaderData();
	return (
		<div>
			<div className="flex flex-col md:flex-row items-center justify-center">
				<div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6   bg-white rounded-lg shadow-lg overflow-hidden">
					<img
						className="mx-auto w-96"
						src={data.photo}
						alt={data.name}
					/>
					<div className="p-6 space-y-4 flex flex-col justify-center">
						<div>
							<h2 className="text-2xl font-bold mb-2">
								{data.name}
							</h2>
							<p className="text-sm text-gray-500 mb-2">
								{data.sub_category}
							</p>
						</div>
						<div>
							<div className="flex justify-between">
								<p className="text-gray-700 font-bold">
									${" "}
									<span className="text-3xl text-green-800 italic">
										{data.price}
									</span>
								</p>
								<p className="text-sm text-gray-500">
									Only{" "}
									<span className="font-black">
										{data.quantity}
									</span>{" "}
									in stock
								</p>
							</div>
						</div>
						<p className="text-gray-700 text-xs mb-4">
							{data.details}
						</p>
						<div className="flex items-center justify-between">
							<div className="w-1/3">
								Ratings :
								<Rating
									items={5}
									readOnly
									value={data.ratings}
								/>
							</div>

							<div>
								<p className="text-gray-700 font-light">
									Seller: {data.seller_name}
								</p>

								<p className="text-gray-700 font-light">
									{data.seller_email}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleToy;

