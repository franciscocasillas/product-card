import "../styles/ProductCard.css";
import PropTypes from "prop-types";

function ProductCard({ name, price }) {
	return (
		<div className="productCard">
			<h1 className="productName">{name}</h1>
			<p className="productPrice">${price}</p>
		</div>
	);
}

ProductCard.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default ProductCard;
