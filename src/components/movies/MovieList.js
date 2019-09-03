import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//({ Movies, onDeleteClick })  is getting the props.Movies and props.onDeleteClick in shorthand basically just taking the curly braces and names and putting it in the props.
// Copies: "",
//   Genre: "",
//   id: null,
//   Plot: "",
//   Rating: "",
//   Title: "",
//   Year: ""
//=> ( means I don't need to use the return key word because its all wrapped in a () then its automatically returned
const MovieList = ({ movies, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Plot</th>
        <th>Genre</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {movies.map(movie => {
        return (
          <tr key={movie.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://www.google.com/search?" + movie.title}>
                Watch
              </a>
            </td>
            <td>
              <Link to={"/movie/" + movie.slug}>{movie.title}</Link>
            </td>
            <td>{movie.plot}</td>
            <td>{movie.genre}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(movie)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default MovieList;
