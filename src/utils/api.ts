import * as Constants from "../constants";
import { getCookie, setCookie } from "../services/cookieManager";
import {
  IIngredientDataShape,
  ILoginForm,
  IPatchForm,
  IRegistrationFormSend,
  IResetPasswordForm,
} from "./api-shape";

// Проверка запроса.
const checkResponse = (response: Response): Promise<any> => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

// Проверка на 'success'.
const checkSuccess = (response: Promise<any> & { success: boolean }) => {
  if (response && response.success) {
    return response;
  }

  return Promise.reject(`Ответ не success: ${response}`);
};

// Обёртка, для каждого отправляемого запроса.
function request(endpoint: string, options?: RequestInit | undefined) {
  return fetch(Constants.BASE_URL + endpoint, options)
    .then(checkResponse)
    .then(checkSuccess);
}

function getIngredients(): Promise<IIngredientDataShape> {
  return request(Constants.INGREDIENTS_URL);
}

function createOrder(ids: Array<string>) {
  return request(Constants.CREATE_ORDER_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: getCookie("token"),
    },
    body: JSON.stringify({ ingredients: ids }),
  });
}

function registerUser(registrationData: IRegistrationFormSend) {
  return request(Constants.REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(registrationData),
  });
}

function forgotPasswordPOST(email: string) {
  return request(Constants.FORGET_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });
}

function resetPassword(resetPasswordForm: IResetPasswordForm) {
  return request(Constants.RESET_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(resetPasswordForm),
  });
}

const login = async (loginForm: ILoginForm) => {
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
    body: JSON.stringify(loginForm),
  });
};

const logout = async (refreshToken: string) => {
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

const patchUserRequest = (patchForm: IPatchForm) => {
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

const patchUser = (patchForm: IPatchForm) => {
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
