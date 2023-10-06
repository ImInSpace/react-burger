import * as Constants from "../constants";
import { getCookie } from "../services/cookieManager";

function getIngredients() {
  return fetch(Constants.INGREDIENTS_URL)
    .then(checkResponse)
    .catch((err) => {
      console.error("Не удалось выполнить запрос", err);
    });
}

function createOrderPOST(ids) {
  return fetch(Constants.CREATE_ORDER_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ ingredients: ids }),
  })
    .then((response) => checkResponse(response))
    .catch((err) => {
      console.error("Не удалось выполнить запрос", err);
    });
}

function registerUser(registrationData) {
  return fetch(Constants.REGISTER_URL, {
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
  return fetch(Constants.FORGET_PASSWORD_URL, {
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
  return fetch(Constants.RESET_PASSWORD_URL, {
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
  return await fetch(Constants.LOGIN_URL, {
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
  return await fetch(Constants.LOGOUT_URL, {
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

const patchUser = async (token) => {
  return await fetch(Constants.GET_USER_URL, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  }).then((response) => checkResponse(response));
};

const updateToken = async (refreshToken) => {
  return await fetch(Constants.REFRESH_TOKEN_URL, {
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

const updateToken2 = (refreshToken) => {
  return fetch(Constants.REFRESH_TOKEN_URL, {
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

const getUserRequest = async () => {
  return await fetch(Constants.GET_USER_URL, {
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
    .then((json) => json)
    .catch((json) => {
      console.log("catch(err): ", json);
      if (!json.success && json.message === "jwt expired") {
        console.log("Обнаружен просроченый токен.");
        return updateToken2(getCookie("refreshToken"))
          .then((json) => {
            console.log("Запускаю процедуру обновления токена.");
            if (json.success) {
              console.log(
                "Токен успешно обвноёлен! Теперь получаю данные пользователя."
              );
              return getUserRequest();
            } else {
              console.error(
                "Не удалось обновить токен для выполнения запроса."
              );
            }
          })
          .catch((err) => {
            console.log("update token err: ", err);
          });
      }
    });
};

export {
  getIngredients,
  createOrderPOST,
  forgotPasswordPOST,
  registerUser,
  resetPassword,
  patchUser,
  login,
  logout,
  updateToken,
  getUser,
};
