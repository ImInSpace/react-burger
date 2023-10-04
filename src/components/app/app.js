import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ForgotPasswordPage from "../../pages/forgot-password";
import ResetPasswordPage from "../../pages/reset-password";
import Profile from "../../pages/profile";
import NotFound404Page from "../../pages/not-found404";
import { RouteWrapper } from "../route-wrapper/route-wrapper";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<RouteWrapper isProtected={true} element={<HomePage />} />}
          />
          <Route
            path="/login"
            element={
              <RouteWrapper isProtected={false} element={<LoginPage />} />
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound404Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
