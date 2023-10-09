import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ForgotPasswordPage from "../../pages/forgot-password";
import ResetPasswordPage from "../../pages/reset-password";
import Profile from "../../pages/profile";
import NotFound404Page from "../../pages/not-found404";
import { RouteWrapper } from "../route-wrapper/route-wrapper";
import OrderHistoryPage from "../../pages/order-history";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { useLocation } from "react-router-dom";
import IngredientModal from "../ui/ingredient-modal";
import { AppHeader } from "../app-header/app-header";
import { useDispatch } from "react-redux";
import { loadIngredients } from "../../services/actions/ingredients";

function App() {
  const dispatch = useDispatch();
  dispatch(loadIngredients());

  let location = useLocation();
  let state = location.state;

  return (
    <>
      <AppHeader />
      <Routes location={state?.backgroundLocation || location}>
        <Route
          path="/"
          element={<RouteWrapper isProtected={false} element={<HomePage />} />}
        />
        <Route
          path="/login"
          element={<RouteWrapper isProtected={false} element={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={
            <RouteWrapper isProtected={false} element={<RegisterPage />} />
          }
        />
        <Route
          path="/profile"
          element={<RouteWrapper isProtected={true} element={<Profile />} />}
        >
          <Route
            path="/profile/orders"
            element={
              <RouteWrapper isProtected={true} element={<OrderHistoryPage />} />
            }
          />
        </Route>
        <Route
          path="/forgot-password"
          element={
            <RouteWrapper
              isProtected={false}
              element={<ForgotPasswordPage />}
            />
          }
        />
        <Route path="/ingredients/:id" element={<IngredientDetails />}></Route>
        <Route
          path="/reset-password"
          element={
            <RouteWrapper isProtected={false} element={<ResetPasswordPage />} />
          }
        />
        <Route path="*" element={<NotFound404Page />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/ingredients/:id" element={<IngredientModal />} />
        </Routes>
      )}
    </>
  );
}

export { App };
