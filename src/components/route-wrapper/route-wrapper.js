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

  // Запрос еще выполняется? Показываем Loader.
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

  // Если роут защищен и пользователь не авторизован, сохраняем destintation-url
  // и отправляем пользователя авторизоваться.
  if (isProtected && !email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // Доступ к reset-password возможно только после страницы forgot-password.
  if (location.pathname === "/reset-password") {
    if (localStorage.getItem("forgot-password") === "visited") return element;
    else return <Navigate to="/forgot-password" />;
  }
  return element;
}

RouteWrapper.propTypes = {
  element: PropTypes.any.isRequired,
  isProtected: PropTypes.bool,
};

export { RouteWrapper };
