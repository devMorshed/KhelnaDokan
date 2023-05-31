import Button from "../shared/Button";
import aircraft from '../../assets/aircraft.svg'
const Banner = () => {
	return (
		<div className="bg-indigo-400 py-20 rounded-lg ">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between flex-col  md:flex-row gap-10">
					<div
						data-aos="fade-right"
						className="md:w-1/2 text-center ">
						<h1 className="text-4xl text-white font-bold mb-6">
							Welcome to Toy Vortex!
						</h1>
						<p className="text-white text-lg mb-8">
							Explore our amazing collection of Action Figures.
						</p>
						<Button to={"/shop"}>Shop Now</Button>
					</div>
					<div data-aos="fade-up" className="md:w-1/2">
						<img
							src={aircraft}
							alt="Toy World"
							className="w-full "
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
