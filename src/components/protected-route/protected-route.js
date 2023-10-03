import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

function ProtectedRouteElement({ element }) {
  // const [isUserLoaded, setIsUserLoaded] = useState(false);

  const user = useSelector((store) => store.auth);
  // if (user.name) {
  //   setIsUserLoaded(true);
  // }

  return user.name ? element : <Navigate to="/login" replace />;
}

ProtectedRouteElement.propTypes = {
  element: PropTypes.any.isRequired,
};

export { ProtectedRouteElement };
