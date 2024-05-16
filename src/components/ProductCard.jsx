import "../styles/ProductCard.css";
import PropTypes from "prop-types";

function ProductCard({ name, price }) {
	return (
		<div>
			<h1>{name}</h1>
			<p>${price}</p>
		</div>
	);
}

ProductCard.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default ProductCard;
