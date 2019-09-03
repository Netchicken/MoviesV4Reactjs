import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/movies/";

export function getMovies() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveMovies(movie) {
  return fetch(baseUrl + (movie.id || ""), {
    method: movie.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(movie)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteMovies(movieId) {
  return fetch(baseUrl + movieId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

//  Copies: "",
//   Genre: "",
//   id: null,
//   Plot: "",
//   Rating: "",
//   Title: "",
//   Year: ""
