import * as Constants from "../constants";
import { getCookie, setCookie } from "../services/cookieManager";

// Проверка запроса.
const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

// Обёртка, для каждого отправляемого запроса.
function request(endpoint, options) {
  return fetch(Constants.BASE_URL + endpoint, options).then(checkResponse);
}

function getIngredients() {
  return request(Constants.INGREDIENTS_URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
}

function createOrder(ids) {
  return request(Constants.CREATE_ORDER_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: getCookie("token"),
    },
    body: JSON.stringify({ ingredients: ids }),
  });
}

function registerUser(registrationData) {
  return request(Constants.REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(registrationData),
  });
}

function forgotPasswordPOST(email) {
  return request(Constants.FORGET_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });
}

function resetPassword(password, token) {
  return request(Constants.RESET_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ password: password, token: token }),
  });
}

const login = async (form) => {
  return request(Constants.LOGIN_URL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  });
};

const logout = async (refreshToken) => {
  return request(Constants.LOGOUT_URL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ token: refreshToken }),
  });
};

const patchUserRequest = (patchForm) => {
  return request(Constants.PATCH_USER_URL, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(patchForm),
  });
};

const patchUser = (patchForm) => {
  return patchUserRequest(patchForm)
    .then((json) => {
      return json;
    })
    .catch((json) => {
      if (!json.success && json.message === "jwt expired") {
        return updateToken().then((json) => {
          if (json.success) {
            setCookie("token", json.accessToken);
            setCookie("refreshToken", json.refreshToken);
            return patchUserRequest(patchForm);
          } else {
            console.error("Не удалось обновить токен для выполнения запроса.");
          }
        });
      }
    });
};

const updateToken = () => {
  return request(Constants.REFRESH_TOKEN_URL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  });
};

const getUserRequest = async () => {
  return request(Constants.GET_USER_URL, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
};

const getUser = async () => {
  return await getUserRequest()
    .then((json) => {
      return json;
    })
    .catch((json) => {
      if (!json.success && json.message === "jwt expired") {
        return updateToken().then((json) => {
          if (json.success) {
            setCookie("token", json.accessToken);
            setCookie("refreshToken", json.refreshToken);
            return getUserRequest();
          } else {
            console.error("Не удалось обновить токен для выполнения запроса.");
          }
        });
      }
    });
};

export {
  getIngredients,
  createOrder,
  forgotPasswordPOST,
  registerUser,
  resetPassword,
  login,
  logout,
  getUser,
  patchUser,
};
