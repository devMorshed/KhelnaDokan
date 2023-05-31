import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useTitle from "../hooks/useTitle";

const UpdateToy = () => {
	useTitle("Update");

	const navigate = useNavigate();

	const formInit = useLoaderData();
	const [formData, setFormData] = useState(formInit);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch("https://toy-vortex.vercel.app/update", {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount === 1) {
					toast("Product Updated");
					navigate("/mytoys");
				}
			});
	};


	return (
		<div className="relative py-10 flex justify-center items-center h-[calc(100vh-292px)]">
			<div
				className="absolute z-[-1] opacity-5 top-0 left-0 right-0 bottom-0"
				style={{
					backgroundImage:
						'url("https://i.ibb.co/5FWbSxh/uchiha.gif")',
					backgroundSize: "8%",
				}}
			/>

			<div className="max-w-md mx-auto bg-gray-100 p-5">
				<div className="text-center my-5">
					<h3 className="my-3 text-3xl font-medium">Update Toy</h3>
					<p></p>
				</div>

				<form onSubmit={handleSubmit}>
					<div className="flex justify-between gap-2 my-5">
						<input
							className="bg-white w-full border border-gray-300 p-2 rounded"
							id="name"
							value={formData.name}
							name="name"
							placeholder="Enter Toy Name"
							onChange={handleChange}
						/>
						<input
							className="bg-white w-full border border-gray-300 p-2 rounded"
							id="sub_category"
							value={formData.sub_category}
							name="sub_category"
							placeholder="Enter Sub Category"
							onChange={handleChange}
						/>
					</div>
					<div className="flex justify-between gap-2 my-5">
						<input
							className="bg-white w-full border border-gray-300 p-2 rounded"
							id="seller_name"
							// defaultValue={user?.displayName}
							value={formData.seller_name}
							name="seller_name"
							placeholder="Enter Seller Name"
							onChange={handleChange}
						/>
						<input
							className="bg-white w-full border border-gray-300 p-2 rounded"
							id="seller_email"
							value={formData.seller_email}
							name="seller_email"
							placeholder="Enter Seller Email"
							onChange={handleChange}
						/>
					</div>
					<div className="flex justify-between gap-2 my-5">
						<input
							className="bg-white w-full border border-gray-300 p-2 rounded"
							id="ratings"
							type="number"
							value={formData.ratings}
							name="ratings"
							placeholder="Enter Ratings"
							onChange={handleChange}
						/>
						<input
							className="bg-white w-full border border-gray-300 p-2 rounded"
							id="price"
							type="number"
							value={formData.price}
							name="price"
							placeholder="Enter Price"
							onChange={handleChange}
						/>
					</div>
					<div className="flex justify-between gap-2 my-5">
						<input
							className="bg-white w-full border border-gray-300 p-2 rounded"
							id="quantity"
							type="number"
							value={formData.quantity}
							name="quantity"
							placeholder="Enter Quantity"
							onChange={handleChange}
						/>
						<input
							className="bg-white w-full border border-gray-300 p-2 rounded"
							id="photo"
							value={formData.photo}
							name="photo"
							placeholder="Enter Photo URL"
							onChange={handleChange}
						/>
					</div>
					<textarea
						rows={1}
						className="bg-white w-full border border-gray-300 p-2 rounded mb-3"
						id="details"
						type="text"
						value={formData.details}
						name="details"
						placeholder="Enter Toy Details"
						onChange={handleChange}
					/>

					<button
						type="submit"
						className="block w-full px-4 py-2 bg-yellow-500 text-white font-medium rounded hover:bg-yellow-600">
						Update
					</button>
				</form>
			</div>
		</div>
	);
};

export default UpdateToy;
