import React, { useContext, useEffect, useState } from "react";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import { myContext } from "../contextProvider/MyContextProvider";

const AddProduct = () => {
	const [product, setProduct] = useState({
		name: "",
		brand: "",
		price: 0,
		details: "",
		colorOptions: [],
		sizeOptions: [],
		images: [],
		currency: "USD",
		category: "",
		subcategory: "",

		weight: "",
		stock: "",
		rating: 0,
		discount: 0,
		featured: false,
		newArrival: false,
		shippingWeight: "",
		shippingDimensions: "",
		shippingMethods: "",
		shippingFrom: "",
		tags: [],
		seller: "",
	});

	const { cat } = useContext(myContext); //getting categories from contextProvider

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProduct((prevProduct) => ({
			...prevProduct,
			[name]: value,
		}));
	};

	const handleArrayChange = (e) => {
		const { name, value } = e.target;
		setProduct((prevProduct) => ({
			...prevProduct,
			[name]: value.split(",").map((item) => item.trim()),
		}));
	};

	const handleCategoryChange = (e) => {
		const { value } = e.target;

		setProduct((prevProduct) => ({
			...prevProduct,
			category: value,
			subcategory: "", // Reset subcategory when category changes
		}));
	};

	const handleSubcategoryChange = (e) => {
		const { value } = e.target;
		setProduct((prevProduct) => ({
			...prevProduct,
			subcategory: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("https://khelnadokan.vercel.app/add", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<div className="my-10  container mx-auto ">
			<h3 className=" text-center text-3xl tracking-tighter font-medium">
				Add New Product
			</h3>

			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-3 mt-10 p-6 lg:px-10 gap-6 items-center border rounded-lg shadow-gray-50 shadow-xl">
				<InputField
					Label={"Name"}
					variant={"name"}
					value={product.name}
					changeHandler={handleChange}
				/>
				<InputField
					Label={"Brand"}
					variant={"brand"}
					value={product.brand}
					changeHandler={handleChange}
				/>

				<InputField
					Label={"Price"}
					variant={"price"}
					value={product.price}
					type="number"
					changeHandler={handleChange}
				/>

				<InputField
					Label={"Details"}
					variant={"details"}
					value={product.details}
					changeHandler={handleChange}
				/>

				<InputField
					Label={"Colors"}
					variant={"colorOptions"}
					value={product.colorOptions.join(",")}
					changeHandler={handleArrayChange}
				/>

				<InputField
					Label={"Sizes"}
					variant={"sizeOptions"}
					value={product.sizeOptions.join(",")}
					changeHandler={handleArrayChange}
				/>

				<SelectField
					Label={"Category"}
					variant={"category"}
					value={product.category}
					options={cat?.map((category) => ({
						value: category.category,
						label: category.category,
					}))}
					onChange={handleCategoryChange}
				/>

				<SelectField
					Label={"Subcategory"}
					variant={"subcategory"}
					value={product.subcategory}
					options={
						product.category
							? cat
									.find(
										(category) =>
											category.category ===
											product.category
									)
									?.subcategories.map((subcategory) => ({
										value: subcategory,
										label: subcategory,
									}))
							: []
					}
					onChange={handleSubcategoryChange}
					disabled={!product.category}
				/>

				<InputField
					Label={"Images"}
					variant={"images"}
					value={product.images.join(", ")}
					changeHandler={handleArrayChange}
				/>

				<InputField
					Label={"Weight"}
					variant={"weight"}
					value={product.weight}
					changeHandler={handleChange}
				/>
				<InputField
					Label={"Stock"}
					variant={"stock"}
					value={product.stock}
					changeHandler={handleChange}
				/>

				<InputField
					Label={"Rating"}
					variant={"rating"}
					value={product.rating}
					changeHandler={handleChange}
				/>
				<InputField
					Label={"Discount"}
					variant={"discount"}
					value={product.discount}
					changeHandler={handleChange}
				/>

				<InputField
					Label={"Shipping Weight"}
					variant={"shippingWeight"}
					value={product.shippingWeight}
					changeHandler={handleChange}
				/>

				<InputField
					Label={"Shipping Dimensions"}
					variant={"shippingDimensions"}
					value={product.shippingDimensions}
					changeHandler={handleChange}
				/>

				<InputField
					Label={"Shipping Methods"}
					variant={"shippingMethods"}
					value={product.shippingMethods}
					changeHandler={handleChange}
				/>

				<InputField
					Label={"Shipping From"}
					variant={"shippingFrom"}
					value={product.shippingFrom}
					changeHandler={handleChange}
				/>

				<InputField
					Label={"Tags"}
					variant={"tags"}
					value={product.tags.join(",")}
					changeHandler={handleArrayChange}
				/>

				<InputField
					Label={"Seller"}
					variant={"seller"}
					value={product.seller}
					changeHandler={handleChange}
				/>

				<div className="flex items-center col-span-2 justify-around">
					<InputField
						Label={"Featured"}
						variant={"featured"}
						value={product.featured}
						type="checkbox"
						changeHandler={handleChange}
					/>
					<InputField
						Label={"New Arrival"}
						variant={"newArrival"}
						value={product.newArrival}
						type="checkbox"
						changeHandler={handleChange}
					/>
				</div>

				<button
					className="block col-span-3 mt-10 mx-auto px-4 py-3 rounded bg-rose-500 text-white tracking-tight font-bold"
					type="submit">
					Add Product
				</button>
			</form>
		</div>
	);
};

export default AddProduct;
