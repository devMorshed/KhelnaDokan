import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../contextProvider/MyContextProvider";
import useTitle from "../hooks/useTitle";

const Registration = () => {
	useTitle("Registration");

	const formInit = {
		name: "",
		photo: "",
		email: "",
		password: "",
	};
	const [formData, setFormData] = useState(formInit);
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");

	const { handleSignUp, handleUpdate } = useContext(myContext);

	const handleChange = (e) => {
		e.preventDefault();

		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { email, password, photo, name } = formData;
		handleSignUp(email, password)
			.then((result) => {
				handleUpdate(name, photo).then(() => {
					navigate("/");
				});
			})
			.catch((err) => setErrorMessage(err.message));
	};


	return (
		<div className="">
			<section className="max-w-3xl mx-auto">
				<div className="border p-4 rounded shadow-xl ">
					<form onSubmit={handleSubmit} className="">
						<h4 className="font-bold text-center text-3xl tracking-wider uppercase my-8">
							Sign Up With
						</h4>
						<div className="flex flex-col items-center gap-4">
							<input
								onChange={handleChange}
								className="border border-gray-900 rounded px-4 py-2 w-2/3"
								type="name"
								name="name"
								id="name"
								value={formData.name}
								placeholder="John Doe"
							/>
							<input
								onChange={handleChange}
								required
								className="border border-gray-900 rounded px-4 py-2 w-2/3"
								type="email"
								name="email"
								id="email"
								value={formData.email}
								placeholder="example@mail.com"
							/>
							<input
								onChange={handleChange}
								className="border border-gray-900 rounded px-4 py-2 w-2/3"
								type="text"
								name="photo"
								id="photo"
								value={formData.photo}
								placeholder="insert photo url"
							/>
							<input
								onChange={handleChange}
								required
								className="border border-gray-900 rounded px-4 py-2 w-2/3"
								type="password"
								name="password"
								id="password"
								value={formData.password}
								placeholder="*****"
							/>
							{errorMessage && (
								<div className="text-red-500">
									{errorMessage}
								</div>
							)}

							<button
								className="px-4 py-3 border rounded bg-amber-500 text-white font-bold"
								type="submit">
								Sign Up
							</button>
						</div>
					</form>

					<div className="flex justify-center items-center gap-8 mt-8">
						<p>Already Have an account? </p>
						<button className="text-blue-600 px-4 py-3 border rounded-md shadow-md">
							<Link to={"/login"}>Sign In</Link>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Registration;
