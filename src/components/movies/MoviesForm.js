import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

//functional component

// Copies: "",
//   Genre: "",
//   id: null,
//   Plot: "",
//   Rating: "",
//   title: "",
//   Year: ""
//taking in the parameters from ManageMoviesPage
const MoviesForm = ({
  movie,
  onSave,
  onChange,
  saving = false, //default saving to disable the save button
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{movie.id ? "Edit" : "Add"} Movie</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="title"
        value={movie.title}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="plot"
        label="Plot"
        value={movie.plot}
        onChange={onChange}
        error={errors.plot}
      />
      <TextInput
        name="genre"
        label="Genre"
        value={movie.genre}
        onChange={onChange}
        error={errors.genre}
      />

      <TextInput
        name="rating"
        label="Rating"
        value={movie.rating}
        onChange={onChange}
        error={errors.rating}
      />
      <TextInput
        name="year"
        label="year"
        value={movie.year}
        onChange={onChange}
        error={errors.year}
      />
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

MoviesForm.propTypes = {
  movie: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default MoviesForm;
