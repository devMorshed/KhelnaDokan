import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";
import "@smastrom/react-rating/style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyContextProvider from "./contextProvider/MyContextProvider";
import Registration from "./pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import Profile from "./pages/profile/Profile";

import Aos from "aos";
import MyToys from "./pages/MyToys";
import AddToy from "./pages/AddToy";
import SingleToy from "./pages/SingleToy";
import UpdateToy from "./pages/UpdateToy";
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import Favorite from "./pages/profile/Favorite";

Aos.init();

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/registration",
				element: <Registration />,
			},
			{
				path: "/shop",
				element: <Shop />,
			},

			{
				path: "/profile",
				element: (
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				),
				children: [
					{
						path: "/profile/favorite",
						element: <Favorite />,
					},
				],
			},
			{
				path: "/mytoys",
				element: (
					<PrivateRoute>
						<MyToys />
					</PrivateRoute>
				),
			},
			{
				path: "/add",
				element: (
					<PrivateRoute>
						<AddToy />
					</PrivateRoute>
				),
			},
			{
				path: "/toy/:id",
				element: (
					<PrivateRoute>
						<SingleToy />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://khelnadokan.vercel.app/toy/${params.id}`),
			},
			{
				path: "/update/:id",
				element: (
					<PrivateRoute>
						<UpdateToy />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://khelnadokan.vercel.app/toy/${params.id}`),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<MyContextProvider>
		<RouterProvider router={router}></RouterProvider>
	</MyContextProvider>
);
