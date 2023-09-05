import * as Constants from "../constants";

function getIngredients() {
  return fetch(Constants.INGREDIENTS_URL)
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

export { getIngredients };
