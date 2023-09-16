import * as Constants from "../constants";

function getIngredients() {
  return fetch(Constants.INGREDIENTS_URL)
    .then((response) => checkResponse(response))
    .catch((err) => {
      console.error("Не удалось выполнить запрос", err);
    });
}

function createOrderPOST(ids) {
  console.log("POST: ", ids);
  console.log("stringify: ", JSON.stringify(ids));
  return fetch(Constants.CREATE_ORDER_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(ids),
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

export { getIngredients, createOrderPOST };
