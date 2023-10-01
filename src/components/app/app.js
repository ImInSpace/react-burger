import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import LoginPage from "../../pages/login";
import RegisterPage from "../../pages/register";
import ForgotPasswordPage from "../../pages/forgot-password";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          {/* prettier-ignore */}
          <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
