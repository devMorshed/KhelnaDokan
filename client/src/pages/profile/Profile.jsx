import React, { useContext } from "react";
import { myContext } from "../../contextProvider/MyContextProvider";
import useTitle from "../../hooks/useTitle";
import { Outlet } from "react-router-dom";
import { BsDatabaseFillDash } from "react-icons/bs";

const Profile = () => {
	useTitle("Profile");

	const { handleSignOut } = useContext(myContext);

	return (
		<div className="flex flex-col gap-10 items-center justify-center h-[calc(100vh-292px)]">
			
			<Outlet />
		</div>
	);
};

export default Profile;


{/* <button
	className="px-4 py-3 border rounded bg-gray-200"
	onClick={() => {
		handleSignOut();
	}}>
	Log out
</button>; */}