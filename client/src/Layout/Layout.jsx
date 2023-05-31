import React, { useContext } from "react";
import Header from "../components/Header";
import "react-loading-skeleton/dist/skeleton.css";
import toast, { Toaster } from "react-hot-toast";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import { myContext } from "../contextProvider/MyContextProvider";
import Skeleton from "../components/shared/Skeleton";
import Spinner from "../components/shared/Spinner";

const Layout = () => {
	const navigation = useNavigation();

	const { loading, user } = useContext(myContext);

	return (
		<div className="relative max-w-7xl mx-auto">
			<Header />
			<Toaster />
			{navigation.state === "loading" || loading ? (
				<Spinner />
			) : (
				<div className="min-h-[calc(100vh-304px)] md:min-h-[calc(100vh-320px)]">
					<Outlet />
				</div>
			)}

			<Footer />
		</div>
	);
};

export default Layout;
