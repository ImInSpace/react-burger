import { Routes, Route } from "react-router-dom";
import { RouteWrapper } from "../route-wrapper/route-wrapper";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { useLocation } from "react-router-dom";
import IngredientModal from "../ui/ingredient-modal/ingredient-modal";
import { AppHeader } from "../app-header/app-header";
import { useDispatch } from "react-redux";
import { loadIngredientsThunk } from "../../services/actions/ingredients";
import { useEffect } from "react";
import FeedModal from "../ui/feed-modal/feed-modal";
import { OrderDetails } from "../order-details/order-details";
import { EditProfile } from "../profile/edit-profile/edit-profile";
import { OrdersWrapper } from "../ui/ws-wrappers/orders-wrapper";
import FeedPage from "../../pages/feed/feed";
import HomePage from "../../pages/home/home";
import LoginPage from "../../pages/login/login";
import RegisterPage from "../../pages/register/register";
import Profile from "../../pages/profile/profile";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import ResetPasswordPage from "../../pages/reset-password/reset-password";
import NotFound404Page from "../../pages/not-found/not-found404";
import {
  WS_FEED_CONNECTION_CLOSED,
  WS_FEED_CONNECTION_START,
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_CONNECTION_START,
} from "../../services/constants";

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredientsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: WS_FEED_CONNECTION_START });

    // return () => {
    //   dispatch({ type: WS_FEED_CONNECTION_CLOSED });
    // };
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: WS_ORDERS_CONNECTION_START });

    // return () => {
    //   dispatch({ type: WS_ORDERS_CONNECTION_CLOSED });
    // };
  }, [dispatch]);

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
          path="/feed"
          element={<RouteWrapper isProtected={false} element={<FeedPage />} />}
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
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/profile/orders" element={<OrdersWrapper />} />
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
        <Route path="/feed/:id" element={<OrderDetails />}></Route>
        <Route path="/profile/orders/:id" element={<OrderDetails />}></Route>
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
          <Route path="/feed/:id" element={<FeedModal />} />
          <Route path="/profile/orders/:id" element={<FeedModal />} />
        </Routes>
      )}
    </>
  );
}

export { App };
