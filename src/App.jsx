import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Greeting from "./components/Greeting";

function App() {
	return (
		<div className="main">
			<Greeting name="Benjamin" />
			<ProductCard name="Cualquier cosa" price="5000" />
		</div>
	);
}

export default App;
