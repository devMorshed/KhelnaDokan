import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../contextProvider/MyContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-hot-toast";
import useTitle from "../hooks/useTitle";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
	if (!isOpen) return null;

	return (
		isOpen && (
			<div className="fixed inset-0 flex items-center justify-center z-50">
				<div className="bg-white rounded-lg shadow-lg p-6">
					<h2 className="text-lg font-semibold mb-4">
						Confirm Deletion
					</h2>
					<p className="mb-4">
						Are you sure you want to delete this item?
					</p>
					<div className="flex justify-end">
						<button
							className="px-4 py-2 mr-2 bg-gray-300 rounded-md text-white"
							onClick={onClose}>
							Cancel
						</button>
						<button
							className="px-4 py-2 bg-red-500 rounded-md text-white"
							onClick={onConfirm}>
							Delete
						</button>
					</div>
				</div>
			</div>
		)
	);
};

const MyToys = () => {
	useTitle("My Toys");

	const navigate = useNavigate();
	const { user } = useContext(myContext);
	const [toys, setToys] = useState([]);
	const [sort, setSort] = useState("");
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [deleteItemId, setDeleteItemId] = useState(null);
	const url = `https://toy-vortex.vercel.app/mytoys?email=${user.email}`;

	const fetchData = (fetchURL) => {
		fetch(fetchURL, {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem("access_token")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (!data.error) {
					setToys(data);
				} else {
					navigate("/");
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		fetchData(url);
	}, []);

	const handleDelete = (id) => {
		setDeleteItemId(id);
		setShowDeleteModal(true);
	};

	const confirmDelete = () => {
		fetch(`https://toy-vortex.vercel.app/delete/${deleteItemId}`, {
			method: "DELETE",
			headers: {
				"content-type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deleteCount !== 0) {
					toast("Item Deleted Successfully!");
					setToys((prevToys) =>
						prevToys.filter((toy) => toy._id !== deleteItemId)
					);
				}
			})
			.catch((err) => console.log(err));
		setShowDeleteModal(false);
	};

	const handleSort = (e) => {
		const sortingOption = e.target.value;

		fetchData(
			`https://toy-vortex.vercel.app/mytoys?email=${user.email}&sort=${sortingOption}`
		);
	};

	return (
		<div>
			<h3 className="text-center font-light tracking-wider text-4xl my-6">
				My Toys
			</h3>
			<div className="overflow-auto px-6 my-10 border-4 max-h-[calc(100vh-400px)]">
				<div className="flex justify-end items-center my-4">
					<label
						className="mr-2 text-gray-700 font-medium"
						htmlFor="sortPrice">
						Sort By Price:
					</label>
					<select
						onChange={handleSort}
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

				<table className="min-w-full mb-10 relative divide-y divide-gray-400 border rounded shadow-xl">
					<thead className="bg-gray-50 p-4 sticky top-0">
						<tr>
							<th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
								no
							</th>
							<th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
								Toy Name
							</th>
							<th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
								Sub-category
							</th>
							<th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
								Price
							</th>
							<th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
								Available
							</th>
							<th className="py-3 text-xs font-medium text-gray-500 uppercase tracking-tighter md:tracking-wider">
								Action
							</th>
						</tr>
					</thead>
					<tbody className="bg-white text-center divide-y divide-gray-200">
						{toys.map(
							(
								{ _id, name, sub_category, price, quantity },
								index
							) => (
								<tr key={_id} className="hover:bg-gray-200">
									<td className="py-4">{index + 1}</td>
									<td className="py-4">{name}</td>
									<td className="py-4">{sub_category}</td>
									<td className="py-4">${price}</td>
									<td className="py-4">{quantity} pc's</td>
									<td className="py-4 flex justify-center gap-2 sm:gap-6 items-center">
										<Link to={`/update/${_id}`}>
											<FaRegEdit
												size={30}
												color="#9a9a9a"
											/>
										</Link>
										<MdDeleteForever
											onClick={() => handleDelete(_id)}
											size={30}
											color="#EF3B4F"
										/>
									</td>
								</tr>
							)
						)}
					</tbody>
				</table>
			</div>

			<ConfirmationModal
				isOpen={showDeleteModal}
				onClose={() => setShowDeleteModal(false)}
				onConfirm={confirmDelete}
			/>
		</div>
	);
};

export default MyToys;
