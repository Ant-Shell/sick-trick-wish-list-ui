
const getData = (endpoint) => {
  let API = 'http://localhost:3001/api/v1/' + endpoint;
  fetch(API)
  .then(errorHandler)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(error => console.log(error))
}

const errorHandler = (response) => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response;
}

export default getData;