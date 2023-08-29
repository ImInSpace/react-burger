import PropTypes from "prop-types";

// Форматирует числовой вывод. (14.45 => 14,45)
function formatPrice(price) {
  return price.toString().replace(".", ",");
}

formatPrice.propTypes = {
  price: PropTypes.number,
};

export { formatPrice };
