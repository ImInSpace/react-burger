import PropTypes from "prop-types";

function fetchData(url) {
  return fetch(url).then((response) => checkResponse(response));
}

const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

fetchData.propTypes = {
  url: PropTypes.string,
};

export { fetchData, checkResponse };
