import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

function ProtectedRouteElement({ element }) {
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  const user = useSelector((store) => store.auth);
  if (user) {
    setIsUserLoaded(true);
  }

  return (
    <>
      {/* Пользователь не прошёл аутентификацию? */}
      {isUserLoaded && <Route to="login" replace />}

      {element}
    </>
  );
}

ProtectedRouteElement.propTypes = {
  element: PropTypes.any.isRequired,
};

export { ProtectedRouteElement };
