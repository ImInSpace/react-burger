import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function RouteWrapper({ isProtected = false, element }) {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location: ", location);

  const user = useSelector((store) => store.auth);
  console.log("user from store: ", user);

  if (!isProtected && user.email) {
    console.log("#1");
    console.log("location state: ", location.state);
    const { from } = location.state || { from: { pathname: "/" } };
    console.log("from : ", from);
    return <Navigate to={from} />;
  }

  if (isProtected && !user.email) {
    console.log("#2");
    return <Navigate to="/login" state={{ from: location }} />;
  }

  console.log("#3");
  return element;
}

RouteWrapper.propTypes = {
  element: PropTypes.any.isRequired,
  isProtected: PropTypes.bool,
};

export { RouteWrapper };
