function getIngredientsData(url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          console.log("ingredient data (json): ", json);
        });
      } else {
        console.error("Не удалось выполненить запрос. ", response.statusText);
      }
    })
    .catch((err) => {
      console.log("Не удалось извлечь данные. ", err);
    });
}

export { getIngredientsData };
