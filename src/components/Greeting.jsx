import "../styles/Greeting.css";
import PropTypes from "prop-types";

function Greeting({ name }) {
	return <h1 className="greeting">Welcome, {name}</h1>;
}

Greeting.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Greeting;
