import React from "react";
import { BsTagsFill, BsGiftFill } from "react-icons/bs";
import { FaDollarSign, FaShippingFast } from "react-icons/fa";
import { ImWink } from "react-icons/im";
import Button from "../shared/Button";
const Work = () => {
	return (
		<section className="container mx-auto mt-20 mb-5">
			<h3 className=" text-4xl text-center tracking-[10px] my-10 font-light">
				Work with Us!
			</h3>
			<div className="grid md:grid-cols-3 md:grid-rows-2 gap-2">
				<div
					data-aos="fade-right"
					className="row-span-2  border flex flex-col justify-center gap-6 bg-gray-950 text-center p-4  rounded-md text-gray-500">
					<h4 className="text-gray-50 text-2xl ">
						Anime Action Lover? <br /> Let’s work together!
					</h4>
					<p className="w-2/3 mx-auto">
						We want to share our Passion all over the world! For
						that reason we need your help! We are looking for true
						anime lovers who can promote our products and became
						part of our Crew! <br /> <br /> Sounds like you?
					</p>
					<Button >
						Apply Now
					</Button>
				</div>
				<div className="flex flex-col row-span-2 gap-2">
					<div data-aos="fade-down" className=" md:h-1/2">
						<img
							className="object-cover h-full w-full rounded-lg"
							src="https://uploads.dovetale.net/brand-profile-media/e92dd7f36b4102a9e83f86fb84df2390.jpg"
							alt=""
						/>
					</div>
					<div
						data-aos="fade-up"
						className="border md:h-1/2 bg-rose-300 rounded-lg p-4 flex flex-col justify-center">
						<h4 className="font-bold text-2xl tracking-wider">
							Your Benifits!
						</h4>
						<ul className="p-4">
							<li className="flex gap-2 items-center">
								<BsTagsFill /> Discount codes
							</li>
							<li className="flex gap-2 items-center">
								<BsGiftFill /> Free Products
							</li>
							<li className="flex gap-2 items-center">
								<FaDollarSign /> Sales Commision
							</li>
							<li className="flex gap-2 items-center">
								<FaShippingFast /> Free & Fast Shipping
							</li>
							<li className="flex gap-2 items-center">
								<ImWink /> Sneak Peek
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col row-span-2 gap-2">
					<div data-aos="fade-down" className="  md:h-1/2">
						<img
							className="object-cover h-full w-full rounded-lg"
							src="https://uploads.dovetale.net/brand-profile-media/5d5a8630dad7fe1693d55b2afff50ace.jpg"
							alt=""
						/>
					</div>
					<div data-aos="fade-down" className="border md:h-1/2">
						<img
							className="object-cover h-full w-full rounded-lg"
							src="https://bbts1.azureedge.net/images/p/full/2022/10/5e53a34b-c1d6-4d44-b49f-4e2a5f72b525.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
