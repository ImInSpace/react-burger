import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RouteWrapper({ isProtected = false, element }) {
  const location = useLocation();

  const user = useSelector((store) => store.login);

  if (!isProtected && user.email) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (isProtected && !user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
}

RouteWrapper.propTypes = {
  element: PropTypes.any.isRequired,
  isProtected: PropTypes.bool,
};

export { RouteWrapper };
