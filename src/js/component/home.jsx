import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import trafficLight from "./trafficLight.jsx";
import TrafficLight from "./trafficLight.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<TrafficLight/>
		</div>
	);
};

export default Home;
