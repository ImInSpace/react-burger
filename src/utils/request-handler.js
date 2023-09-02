import PropTypes from "prop-types";

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.error("Не удалось выполненить запрос. ", response.statusText);
      }
    })
    .catch((err) => {
      console.error("Не удалось извлечь данные. ", err);
    });
}

fetchData.propTypes = {
  url: PropTypes.string,
};

export { fetchData };
