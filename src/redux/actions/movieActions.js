import * as types from "./actionTypes";
import * as movieApi from "../../api/movieApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
//Action creators
export function createMovie(movie) {
  //debugger;
  //all caps is to show its a constant - just a convention
  //Give it a type and pass along movie as a payload
  //its an action creator as its creating an action type is the actions type and movie data as action
  return { type: types.CREATE_MOVIE, movie };
}

export function loadMoviesSuccess(movies) {
  return { type: types.LOAD_MOVIES_SUCCESS, movies };
}
export function createMovieSuccess(movie) {
  return { type: types.CREATE_MOVIE_SUCCESS, movie };
}

export function updateMovieSuccess(movie) {
  return { type: types.UPDATE_MOVIE_SUCCESS, movie };
}
//our first thunk a function in a function  - thunk injects dispatch so we don't have to
//this gets run on the MoviePage.js
export function loadMovies() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return movieApi
      .getMovies()
      .then(movies => {
        dispatch(loadMoviesSuccess(movies));
      })
      .catch(error => {
        dispatch(apiCallError(error)); //throws the error to the thunk  API status will get updated to refelct the api call
        throw error;
      });
  };
}
//Thunk
export function saveMovie(movie) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return movieApi
      .saveMovies(movie)
      .then(savedMovie => {
        movie.id
          ? dispatch(updateMovieSuccess(savedMovie)) //if there is a movie id then do this
          : dispatch(createMovieSuccess(savedMovie)); //otherwise do this
      })
      .catch(error => {
        dispatch(apiCallError(error)); //throws the error to the thunk  API status will get updated to refelct the api call
        throw error;
      });
  };
}
