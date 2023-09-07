import PropTypes from "prop-types";

function IngredientTitle({ text }) {
  return <p className="text text_type_main-medium mt-4">{text}</p>;
}

IngredientTitle.propTypes = {
  text: PropTypes.string,
};

export { IngredientTitle };
