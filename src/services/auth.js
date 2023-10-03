// --- Регистрация ---
const registrationRequest = {
  email: "",
  password: "",
  name: "",
};

const registrationResponse = {
  success: true,
  user: {
    email: "",
    name: "",
  },
  accessToken: "",
  refreshToken: "",
};

// --- Аутентификация ---
const authRequest = {
  email: "",
  password: "",
};

const authResponse = {
  success: true,
  accessToken: "Bearer ...",
  refreshToken: "",
  user: {
    email: "",
    name: "",
  },
};

// --- Обновление токена ---
const regreshTokenRequest = {
  token: "значение refreshToken",
};

const refreshTokenResponse = {
  success: true,
  accessToken: "Bearer ...",
  refreshToken: "",
};

// --- Выход из системы ---
const logoutRequest = {
  token: "значение refreshToken",
};

const logoutResponse = {
  success: true,
  accessToken: "Bearer ...",
  refreshToken: "",
};
