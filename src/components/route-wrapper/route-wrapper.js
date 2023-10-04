import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function RouteWrapper({ isProtected = false, element }) {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((store) => store.auth);
  console.log("user from store: ", user);

  // Route не защищен.
  if (!isProtected) {
    return element;
  }

  if (user.name) {
    console.log("location state: ", location.state);
    const { from } = location.state || { from: { pathname: "/" } };
    console.log("from : ", from);
    return <Navigate to={from} />;
  }

  /* prettier-ignore */
  return user.name ? element : <Navigate to="/login" state={{from: location}} />;
}

RouteWrapper.propTypes = {
  element: PropTypes.any.isRequired,
  isProtected: PropTypes.bool,
};

export { RouteWrapper };
