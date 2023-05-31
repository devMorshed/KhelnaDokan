import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/shared/Spinner";
import { myContext } from "../contextProvider/MyContextProvider";
import { toast } from "react-hot-toast";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(myContext);
	const location = useLocation();


	if (loading) {
		return <Spinner />;
	}

	if (user) {
		return children;
	} else {
		toast("You Have to Log In First");
		return (
			<Navigate state={{ from: location }} to="/login" replace></Navigate>
		);
	}
};

export default PrivateRoute;
