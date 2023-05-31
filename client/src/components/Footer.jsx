import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-gray-900 pt-4 text-gray-50">
			<div className="container mx-auto p-2 flex gap-4 justify-between lg:justify-around items-center">
				<div className="flex items-center justify-center gap-1 flex-col">
					<img
						className="w-32"
						src={"https://i.ibb.co/tYWxJPW/akatsuki.png"}
						alt=""
          />
          <h3 className="text-xl">Toy Vortex</h3>
				</div>
				<div className="flex flex-col gap-1">
					<p className="text-gray-300 my-3">Contact</p>
					<Link to={"#"}>Facebook Page</Link>
					<Link to={"#"}>Instagram</Link>
          <p>Phone: <span>+8801725025050</span></p>
				</div>
				<div className="flex flex-col gap-1">
					<p className="text-gray-300 my-3">Legal</p>
					<Link to={"#"}>Terms of use</Link>
					<Link to={"#"}>Privacy policy</Link>
					<Link to={"#"}>Cookie policy</Link>
				</div>
			</div>
			<div>
				<p className="text-xs py-2 text-center text-gray-400">
					copirights reserved to devMorshed
				</p>
			</div>
		</div>
	);
};

export default Footer;
