import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
		document.title = `${title} | Toy Vortex`;
	}, [title]);
};

export default useTitle;
