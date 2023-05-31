const Skeleton = ({cclass}) => {
	return (
		<div className={cclass}>
			<div className=" animate-pulse skeleton-item h-6 w-14 bg-gray-100 "></div>
			<div className=" animate-pulse skeleton-item h-6 w-14 bg-gray-100 "></div>
			<div className=" animate-pulse rounded-full skeleton-item h-12 w-12 bg-gray-100 "></div>
		</div>
	);
};

export default Skeleton;
