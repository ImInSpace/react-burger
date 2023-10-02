import * as Constants from "../constants";

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

function resetPasswordPOST(email) {
  return fetch(Constants.RESET_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  })
    .then((response) => checkResponse(response))
    .catch((err) => {
      console.error("Не удалось выполнить запрос", err);
    });
}

const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

export { getIngredients, createOrderPOST, resetPasswordPOST };
