import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserActionGen } from "../../services/actions/auth";
import { getCookie } from "../../services/cookieManager";
import { Loader } from "../ui/loader";

function RouteWrapper({ isProtected = false, element }) {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getUserActionGen(getCookie("token")));
  }, [dispatch]);

  const { getUserRequest, getUserError, email } = useSelector(
    (store) => store.auth
  );

  if (getUserRequest && !getUserError) {
    return <Loader size="small" inverse={true} />;
  }

  if (!isProtected && email) {
    if (location.state == null) {
      // Авторизованный пользователь не должен иметь доступ к этим роутам.
      if (
        location.pathname === "/login" ||
        location.pathname === "/register" ||
        location.pathname === "/forgot-password" ||
        location.pathname === "/reset-password"
      )
        return <Navigate to={"/"} />;

      return element;
    }

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
