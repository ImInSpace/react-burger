import * as Constants from "../constants";

// Обёртка, для каждого отправляемого запроса.
function request(
  endpoint: string,
  options?: RequestInit | undefined
): Promise<any> {
  return fetch(Constants.BASE_URL + endpoint, options)
    .then(checkResponse)
    .then(checkSuccess);
}

// Проверка запроса.
const checkResponse = (response: Response): Promise<any> => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

// Проверка на 'success'.
const checkSuccess = (
  response: Promise<any> & { success: boolean }
): Promise<any> => {
  if (response && response.success) {
    return response;
  }

  return Promise.reject(`Ответ не success: ${response}`);
};

export { request };
