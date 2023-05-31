import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCard from "../ProductCard";
import Spinner from "../shared/Spinner";

const ShopTab = () => {
	const [currentTab, setCurrentTab] = useState("Anime");
	const [tabData, setTabData] = useState([]);

	useEffect(() => {
		fetch(`https://khelnadokan.vercel.app/tab/${currentTab}`)
			.then((res) => res.json())
			.then((data) => {
				setTabData(data);
			});
	}, [currentTab]);

	return (
		<section className="container mx-auto my-20">
			<div>
				<h3 className=" text-4xl text-center tracking-[10px] font-light">
					Most Popular
				</h3>
				<Tabs>
					<div className="w-96 px-10 mx-auto text-center my-10">
						<TabList>
							<Tab onClick={() => setCurrentTab("Anime")}>
								Anime
							</Tab>
							<Tab onClick={() => setCurrentTab("Marvel")}>
								Marvel
							</Tab>
							<Tab onClick={() => setCurrentTab("DC Comics")}>
								DC
							</Tab>
						</TabList>
					</div>

					<div className="relative">
						<TabPanel>
							{/* <div
								className="absolute z-[-1] opacity-10  top-0 left-0 right-0 bottom-0"
								style={{
									backgroundImage:
										'url("https://i.ibb.co/JnfD3Cz/fmab.png")',
									backgroundSize: "10%",
								}}
							/> */}
							{tabData[0]?.subcategory !== "Anime" ? (
								<Spinner />
							) : (
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
									{tabData.map((product) => (
										<ProductCard
											key={product._id}
											product={product}
										/>
									))}
								</div>
							)}
						</TabPanel>
					</div>

					<div className="relative">
						<TabPanel>
							<div
								className="absolute z-[-1] opacity-10  top-0 left-0 right-0 bottom-0"
								style={{
									backgroundImage:
										'url("https://i.ibb.co/bBBnxHh/marvel.png")',
									backgroundSize: "35%",
								}}
							/>
							{tabData[0]?.subcategory !== "Marvel" ? (
								<Spinner />
							) : (
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
									{tabData.map((product) => (
										<ProductCard
											key={product._id}
											product={product}
										/>
									))}
								</div>
							)}
						</TabPanel>
					</div>

					<div className="relative">
						<TabPanel>
							<div
								className="absolute z-[-1] opacity-10  top-0 left-0 right-0 bottom-0"
								style={{
									backgroundImage:
										'url("https://i.ibb.co/hLJLhJc/dc.png")',
									backgroundSize: "10%",
								}}
							/>
							{tabData[0]?.subcategory !== "DC Comics" ? (
								<Spinner />
							) : (
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
									{tabData.map((product) => (
										<ProductCard
											key={product._id}
											product={product}
										/>
									))}
								</div>
							)}
						</TabPanel>
					</div>
				</Tabs>
			</div>
		</section>
	);
};

export default ShopTab;
