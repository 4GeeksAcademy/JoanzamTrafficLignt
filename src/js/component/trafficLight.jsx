import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {

	const [selected, setSelected] = useState("yellow")
	const changeColor = (color) => {
		setSelected(color)
	}
	// []
	return (
		<main>
			<div className="mini-box"></div>
			<div className="box-light">
				<div 
					className={`red ${selected == "red" ? "light-on" : " "}`}
					onClick={()=>changeColor("red") }
					></div>
				<div 
					className={`yellow ${selected == "yellow" ? "light-on" : " "}`}
					onClick={()=>changeColor("yellow") }
					></div>
				<div 
					className={`green ${selected == "green" ? "light-on" : " "}`}
					onClick={()=>changeColor("green") }
				></div>
			</div>
		</main>

	);
};;

export default TrafficLight;
//if (selecte == 'red') {pongo color encendido}
// {selected == "red"} ? "light-on" : " "}
////1.Crear (maquetar) html
//2.Asignar el color a un div a través de una variable estado
//3.Crear un evento
//4. Evaluar que color asignar con base click