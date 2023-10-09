import * as Constants from "../constants";
import { getCookie, setCookie } from "../services/cookieManager";

function getIngredients() {
  return fetch(Constants.BASE_URL + Constants.INGREDIENTS_URL)
    .then(checkResponse)
    .catch((err) => {
      console.error("Не удалось выполнить запрос", err);
    });
}

function createOrder(ids) {
  return fetch(Constants.BASE_URL + Constants.CREATE_ORDER_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: getCookie("token"),
    },
    body: JSON.stringify({ ingredients: ids }),
  })
    .then((response) => checkResponse(response))
    .catch((err) => {
      console.error("Не удалось выполнить запрос.", err);
    });
}

function registerUser(registrationData) {
  return fetch(Constants.BASE_URL + Constants.REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(registrationData),
  })
    .then((response) => checkResponse(response))
    .catch((err) => {
      console.error("Не удалось зарегистрировать пользователя!", err);
    });
}

function forgotPasswordPOST(email) {
  return fetch(Constants.BASE_URL + Constants.FORGET_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  })
    .then((response) => checkResponse(response))
    .catch((err) => {
      console.error(
        "Не удалось выполнить запрос для восстановления пароля.",
        err
      );
    });
}

function resetPassword(password, token) {
  return fetch(Constants.BASE_URL + Constants.RESET_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ password: password, token: token }),
  })
    .then((response) => response.json())
    .catch((err) => {
      console.error("Не удалось выполнить запрос", err);
    });
}

const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

const login = async (form) => {
  return await fetch(Constants.BASE_URL + Constants.LOGIN_URL, {
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
  }).then((response) => checkResponse(response));
};

const logout = async (refreshToken) => {
  return await fetch(Constants.BASE_URL + Constants.LOGOUT_URL, {
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
  }).then((response) => checkResponse(response));
};

const patchUserRequest = (patchForm) => {
  return fetch(Constants.BASE_URL + Constants.PATCH_USER_URL, {
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
  }).then((response) => checkResponse(response));
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
  return fetch(Constants.BASE_URL + Constants.REFRESH_TOKEN_URL, {
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
  }).then((response) => checkResponse(response));
};

const getUserRequest = async () => {
  return await fetch(Constants.BASE_URL + Constants.GET_USER_URL, {
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
  }).then((response) => checkResponse(response));
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
