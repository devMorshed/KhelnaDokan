import React, { createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { app } from "../firebase/Firebase";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const myContext = createContext();

const MyContextProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);
	const [cat, setCat] = useState();

	useEffect(() => {
		fetch("http://localhost:5000/cat")
			.then((res) => res.json())
			.then((data) => setCat(data));
	}, []);

	// Register User
	const handleSignUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const handleUpdate = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	const handleSignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const handleSignOut = () => {
		return signOut(auth);
	};

	const handleGoogleSignin = () => {
		return signInWithPopup(auth, provider);
	};

	useEffect(() => {
		setLoading(true);
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
			if (loggedUser) {
				setUser(loggedUser);
				setLoading(false);
				fetch("https://toy-vortex.vercel.app/jwt", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(loggedUser),
				})
					.then((res) => res.json())
					.then((data) => {
						localStorage.setItem("access_token", data.token);
					});
			} else {
				setUser(null);
				setLoading(false);
				localStorage.removeItem("access_token");
			}
		});

		return () => unsubscribe();
	}, []);

	const MyContextValue = {
		handleSignUp,
		user,
		loading,
		handleUpdate,
		handleSignOut,
		handleSignIn,
		handleGoogleSignin,
		cat,
	};

	return (
		<myContext.Provider value={MyContextValue}>
			{children}
		</myContext.Provider>
	);
};

export default MyContextProvider;
