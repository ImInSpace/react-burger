import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ForgotPasswordPage from "../../pages/forgot-password";
import ResetPasswordPage from "../../pages/reset-password";
import Profile from "../../pages/profile";
import NotFound404Page from "../../pages/not-found404";
import { RouteWrapper } from "../route-wrapper/route-wrapper";
import OrderHistoryPage from "../../pages/order-history";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RouteWrapper isProtected={false} element={<HomePage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RouteWrapper isProtected={false} element={<LoginPage />} />
            }
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
                <RouteWrapper
                  isProtected={true}
                  element={<OrderHistoryPage />}
                />
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
          <Route
            path="/reset-password"
            element={
              <RouteWrapper
                isProtected={false}
                element={<ResetPasswordPage />}
              />
            }
          />
          <Route path="*" element={<NotFound404Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
