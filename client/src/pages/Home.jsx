import Banner from "../components/Home/Banner";
import Gallery from "../components/Home/Gallery";
import ShopTab from "../components/Home/ShopTab";
import Story from "../components/Home/Story";
import Work from "../components/Home/Work";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home")
	return (
		<div className="">
			<Banner />
			<Gallery />
			<ShopTab />
      <Story />
      <Work/>
		</div>
	);
};

export default Home;
