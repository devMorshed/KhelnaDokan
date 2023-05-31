import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "../shared/Button";

const Story = () => {
	return (
		<div
			className="relative bg-cover bg-center bg-fixed rounded-lg"
			style={{ backgroundImage: `url(${"backgroundImage"})` }}>
			<div className="max-w-4xl mx-auto py-24 px-4">
				<div className="flex items-center justify-between">
					<div className="sm:w-1/2">
						<h1
							className="text-4xl text-white font-mono mb-4"
							data-aos="fade-up">
							Get To Know Us
						</h1>
						<h2
							className="text-xl text-white mb-8"
							data-aos="fade-up"
							data-aos-delay="200"></h2>
						<p
							className="text-white font-light mb-8"
							data-aos="fade-up"
							data-aos-delay="400">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Itaque modi ullam temporibus est sed provident
							beatae reiciendis, quibusdam nostrum autem iure fuga
							mollitia alias obcaecati perspiciatis earum veniam
							nemo quae!
						</p>
						<Button cclass={"flex items-center gap-2 group "}>
							Our Story
							<span>
								<RiArrowRightSLine className=" group-hover:text-xl" />
							</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Story;
