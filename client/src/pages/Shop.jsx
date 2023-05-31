import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../contextProvider/MyContextProvider";
import { AiOutlineSearch, AiFillCaretRight } from "react-icons/ai";
import { toast } from "react-hot-toast";

const Shop = () => {
	const [products, setProducts] = useState();
	const { cat } = useContext(myContext); //getting categories from contextProvider

	useEffect(() => {
		fetch("https://khelnadokan.vercel.app/shop")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const handleCategorySearch = (subCat) => {
		fetch(`https://khelnadokan.vercel.app/category/${subCat}`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
	};

	const handleNameSearch = (e) => {
		e.preventDefault();
		const searchText = e.target[0].value;

		fetch(`https://khelnadokan.vercel.app/search/${searchText}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.length === 0) {
					toast(`${searchText} Not Found`);
				} else {
					setProducts(data);
				}
				e.target.reset();
			});
	};

	// const filterSearch = (e) => {
	// 	const sortingOption = e.target.value;

	// 	// fetch(`https://khelnadokan.vercel.app/shop?sort=${sortingOption}`)
	// 	// 	.then((res) => res.json())
	// 	// 	.then((data) => setProducts(data))
	// 	// 	.catch((err) => console.log(err));
	//   console.log(products);

	// };

	const filterSearch = (e) => {
		const selectedOption = e.target.value;

		const sortedProducts = [...products]; // Create a copy of the products array

		if (selectedOption === "asc") {
			sortedProducts.sort((a, b) => a.price - b.price); // Sort in ascending order
		} else if (selectedOption === "desc") {
			sortedProducts.sort((a, b) => b.price - a.price); // Sort in descending order
		}

		setProducts(sortedProducts);
	};

	console.log(products);

	return (
		<div className="container mx-auto  pb-10 relative ">
			<div className=" container p-10 border bg-orange-400 fixed left-1/2 -translate-x-1/2">
				<form
					onSubmit={(e) => {
						handleNameSearch(e);
					}}
					className="flex max-w-xl mx-auto items-center relative">
					<input
						className=" w-full rounded-md p-3 border border-black "
						type="search"
						name="search"
						required
						id=""
						placeholder="Search Toys ..."
					/>
					<button
						type="submit"
						className="absolute top-0 border border-black border-s-0 bottom-0 px-6 right-0 hover:bg-gray-400  rounded-e-md bg-base-200 bg-gray-300">
						<AiOutlineSearch size={35} />
					</button>
				</form>
			</div>

			<div className="flex  gap-5 pt-40">
				<div className="w-1/3 md:w-64 fixed ">
					<ul className="flex flex-col  justify-evenly">
						{cat?.map((c, ind) => (
							<li
								key={ind}
								className="border flex items-center group p-3 relative ">
								{c.category}
								<div className="hidden group-hover:block">
									<AiFillCaretRight size={20} />
								</div>
								<ul className="hidden group-hover:block z-10 top-1/2 right-0 absolute  border bg-gray-200 ">
									{c.subcategories.map((sub_c, index) => (
										<li
											onClick={() =>
												handleCategorySearch(sub_c)
											}
											key={index}
											className="py-2 px-4 w-full whitespace-nowrap   hover:bg-gray-400 hover:text-white">
											{sub_c}
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>

					<div className=" flex flex-col items-center pt-5">
						<label
							className="mr-2 text-gray-700 font-medium"
							htmlFor="sortPrice">
							Sort By Price:
						</label>
						<select
							onChange={filterSearch}
							aria-label="Price"
							name="Price"
							id="sortPrice"
							className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
							defaultValue="">
							<option value="" disabled>
								Choose an option
							</option>
							<option value="asc">Ascending</option>
							<option value="desc">Descending</option>
						</select>
					</div>
				</div>
				<div className="grow md:pl-72 sm:pl-64 pl-44    grid lg:grid-cols-3 md:grid-cols-2 gap-6">
					{products?.map((p) => (
						<div
							key={p._id}
							className="p-4 space-y-3 border shadow-xl">
							<img
								className="border rounded w-full  bg-gray-200 min-h-[200px]"
								src=""
								alt=""
							/>
							<p>Name : {p.name}</p>

							<div className="flex justify-between">
								<p>Price : {p.price}</p>
								<p>Stock : {p.stock}</p>
							</div>
							<p>Brand : {p.brand}</p>
							<p>{p.subcategory}</p>
							<p>Tags: {p.tags.map((t) => `#${t} `)}</p>
							<button className="block mx-auto my-2 px-4 py-3 border rounded bg-fuchsia-500 text-white tracking-tighter">
								Add To Cart
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Shop;
