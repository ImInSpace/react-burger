import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getUser } from "../../utils/api";
import { useDispatch } from "react-redux";
import {
  GET_USER_REQUEST,
  getUserActionGen,
} from "../../services/actions/auth";
import { getCookie } from "../../services/cookieManager";
import { Loader } from "../ui/loader";

function RouteWrapper({ isProtected = false, element }) {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getUserActionGen(getCookie("token")));
  }, [dispatch]);

  const { getUserRequest, getUserError, name, email } = useSelector(
    (store) => store.auth
  );

  if (getUserRequest && !getUserError) {
    return <Loader size="small" inverse={true} />;
  }

  if (!isProtected && email) {
    console.log("location state: ", location.state);
    if (location.state == null) return element;
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (isProtected && !email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
}

RouteWrapper.propTypes = {
  element: PropTypes.any.isRequired,
  isProtected: PropTypes.bool,
};

export { RouteWrapper };
