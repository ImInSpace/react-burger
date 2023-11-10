import { request } from "../utils/api-common";
import * as Constants from "../constants";
import { getCookie, setCookie } from "../services/cookieManager";
import {
  ICreateOrderRequestForm,
  ICreateOrderResponseForm,
  IForgotPasswordRequestBody,
  IForgotPasswordResponseBody,
  IGetUserResponseBody,
  IIngredientsResponse,
  ILoginForm,
  ILoginResponseBody,
  ILogoutRequestBody,
  ILogoutResponseBody,
  IPatchBodyResponse,
  IPatchForm,
  IRefreshTokenRequest,
  IRegistrationRequestForm,
  IRegistrationResponseForm,
  IResetPasswordForm,
  IResetPasswordResponseBody,
  IUpdateTokenResponseBody,
} from "./api-shape";

function getIngredients(): Promise<IIngredientsResponse> {
  return request(Constants.INGREDIENTS_URL);
}

function createOrder(
  createOrderRequestForm: ICreateOrderRequestForm
): Promise<ICreateOrderResponseForm> {
  return request(Constants.CREATE_ORDER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token"),
    } as HeadersInit,
    body: JSON.stringify(createOrderRequestForm),
  });
}

function registerUser(
  registrationData: IRegistrationRequestForm
): Promise<IRegistrationResponseForm> {
  return request(Constants.REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(registrationData),
  });
}

function forgotPasswordPOST(
  forgotPasswordBody: IForgotPasswordRequestBody
): Promise<IForgotPasswordResponseBody> {
  return request(Constants.FORGET_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(forgotPasswordBody),
  });
}

function resetPassword(
  resetPasswordForm: IResetPasswordForm
): Promise<IResetPasswordResponseBody> {
  return request(Constants.RESET_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(resetPasswordForm),
  });
}

const login = async (loginBody: ILoginForm): Promise<ILoginResponseBody> => {
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
    body: JSON.stringify(loginBody),
  });
};

const logout = async (
  logoutBody: ILogoutRequestBody
): Promise<ILogoutResponseBody> => {
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
    body: JSON.stringify(logoutBody),
  });
};

const patchUserRequest = (
  patchForm: IPatchForm
): Promise<IPatchBodyResponse> => {
  return request(Constants.PATCH_USER_URL, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token"),
    } as HeadersInit,
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
        const refreshTokenBody: IRefreshTokenRequest = {
          token: getCookie("refreshToken")!,
        };
        return updateTokenRequest(refreshTokenBody).then((json) => {
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

export const updateTokenRequest = (
  body: IRefreshTokenRequest | undefined
): Promise<IUpdateTokenResponseBody> => {
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
    body: body ? JSON.stringify(body) : getCookie("refreshToken"),
  });
};

const getUserRequest = async (): Promise<IGetUserResponseBody> => {
  return request(Constants.GET_USER_URL, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token"),
    } as HeadersInit,
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
        const refreshTokenBody: IRefreshTokenRequest = {
          token: getCookie("refreshToken")!,
        };
        return updateTokenRequest(refreshTokenBody).then((json) => {
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
