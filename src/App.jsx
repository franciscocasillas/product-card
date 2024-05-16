import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
	const [count, setCount] = useState(0);

	return <ProductCard name="Cualquier cosa" price="5000" />;
}

export default App;
