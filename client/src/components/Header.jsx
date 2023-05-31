import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { myContext } from "../contextProvider/MyContextProvider";
import Skeleton from "./shared/Skeleton";
import { Tooltip } from "react-tooltip";
import Button from "./shared/Button";
const Header = () => {
	const { loading, user } = useContext(myContext);

	return (
		<div className="flex bg-gray-50 justify-around mx-auto py-2 items-center sticky z-10 left-0 right-0 top-0">
			<div className="brand">
				<NavLink className={"flex items-center gap-1"} to={"/"}>
					<img
						className="w-16 md:w-20 "
						src="https://i.ibb.co/tYWxJPW/akatsuki.png"
						alt=""
					/>
					<p className="font-black italic text-xl hidden md:block">
						Khelna
					</p>
				</NavLink>
			</div>
			<div className="flex  md:flex-row items-center gap-1 md:gap-20">
				<div className="flex text-sm sm:text-base gap-1 md:gap-4">
					<NavLink to={"/"}>Home</NavLink>
					<NavLink to={"/shop"}>Shop</NavLink>
				</div>
				{loading ? (
					""
				) : user ? (
					<div className="">
						<NavLink to={"/profile"}>
							<img
								data-tooltip-id="profile"
								data-tooltip-content={user?.displayName}
								className=" w-8 h-8 sm:w-12 sm:h-12 rounded-full  bg-black"
								src={user?.photoURL}
								alt="Profile"
							/>
						</NavLink>
					</div>
				) : (
					<Button to={"/login"}>Log In</Button> 
				)}
				<Tooltip id="profile" />
			</div>
		</div>
	);
};

export default Header;
