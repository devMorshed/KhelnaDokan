import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { myContext } from "../contextProvider/MyContextProvider";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../hooks/useTitle";
const Login = () => {
  useTitle("Log In");

	const navigate = useNavigate();
	const location = useLocation();
  const destination = location.state?.from?.pathname || "/";

	const { handleSignIn, handleGoogleSignin } = useContext(myContext);

	const formInit = {
		email: "",
		password: "",
	};
	const [formData, setFormData] = useState(formInit);
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = (e) => {
		e.preventDefault();

		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleFormSign = (event) => {
		event.preventDefault();
		const { email, password } = formData;
		handleSignIn(email, password)
			.then(() => {
				setFormData(formInit);
				navigate(destination);
			})
			.catch((err) => setErrorMessage(err.message));
	};

	const googleHandler = () => {
		handleGoogleSignin()
			.then(() => {
				navigate(destination);
			})
			.catch((err) => setErrorMessage(err.message));
	};


	if (errorMessage === "Firebase: Error (auth/user-not-found).") {
		setErrorMessage("Not a User! Please Register First.");
	}
	if (errorMessage === "Firebase: Error (auth/wrong-password).") {
		setErrorMessage("Password Wrong! Try Again.");
	}

	return (
		<section className=" flex pt-20 justify-center">
			<div className="border max-w-3xl w-full rounded shadow-xl">
				<form onSubmit={handleFormSign} className="">
					<h4 className="font-bold text-center text-3xl tracking-wider uppercase my-8">
						Log In With
					</h4>
					<div className="flex flex-col items-center gap-4">
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
							required
							className="border border-gray-900 rounded px-4 py-2 w-2/3"
							type="password"
							name="password"
							value={formData.value}
							id="password"
							placeholder="*****"
						/>
						{errorMessage && <div className="text-red-500"> {errorMessage}</div>}
						<button
							className="px-4 py-3 border rounded bg-amber-500 text-white font-bold"
							type="submit">
							Log In
						</button>
					</div>
				</form>
				<div className="flex justify-center items-center gap-6 my-6">
					<h3 className="font-bold text-center text-xl tracking-wider uppercase ">
						Or using
					</h3>
					<button
						onClick={googleHandler}
						className="flex items-center border p-2 rounded-md hover:bg-orange-200">
						{" "}
						<FcGoogle size={25} /> oogle
					</button>
				</div>
				<div className="flex justify-center items-center gap-8 my-8">
					<p>Dont have an account? </p>
					<button className="text-blue-600 px-4 py-3 border rounded-md shadow-md">
						<Link to={"/registration"}>Register</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Login;
