import React, { useEffect, useState } from "react"; //useeffect  usestate is a hook
import { connect } from "react-redux";
import { loadMovies, saveMovie } from "../../redux/actions/movieActions";
import PropTypes from "prop-types";
import MoviesForm from "./MoviesForm";
import { newMovie } from "../../../tools/mockData";
import Spinner from "../common/Spinner"; //busy waiting spinner
import { toast } from "react-toastify";

//THIS IS A DEDICATED PAGE FOR ADDING AND EDITING MovieS
//it is the backend for add and edit Movie

//this page will be using HOOKS and replace componentdidmount
//Hooks allow us to handle state and side effects within function components so we don't need to declare class components any more prefer function compoenets over class components as they are easier to work with and understand

function ManageMoviePage({
  movies,
  loadMovies,
  history, //browser history so we can go back to earlier page history object gets passd in automatically from react router
  saveMovie, //this matches the one we have set in mapdispatchtoprops
  ...props // ...props does all the properties we havn't explicittly destructured above, loadAuthors etc,
}) {
  //}) {

  //     variables that are set,                 set from props.Movie
  const [movie, setMovie] = useState({ ...props.movie }); //useState lets us add react state to function components
  const [errors, setErrors] = useState({}); //holds any errors that occur when we run validation
  const [saving, setSaving] = useState(false); //are we saving the form? No

  useEffect(() => {
    //useeffect will accept a function it will call and will rerun every time the component renders

    if (movies.length === 0) {
      loadMovies().catch(error => {
        alert("Loading movie failed" + error);
      });
    } else {
      setMovie({ ...props.movie }); //need this to load the form directly from the url
    }
   }, [props.movie]); //we declare a second component that means it only runs when the array changes declaring an empty array means it works the same as compoenetn did mount (becuase nothing ever changes) So with props.movie it loads when the movie change

  function handleChange() {
    setMovie(prevMovie => ({
      ...prevMovie
      //  [name]: name === "authorId" ? parseInt(value, 10) : value //use parseint to pass through a default value otherwise pass in the value directly
    }));
  }

  //all this function does is return a bool for valid true false
  function formIsValid() {
    //client side validation this is faster than the one in apiserver.js which is server sided
    const { title, plot, genre } = movie;
    const errors = {}; //make an error object

    //add in any errors
    if (!title) errors.title = "Title is required.";
    if (!plot) errors.plot = "Plot is required";
    if (!genre) errors.genre = "Genre is required";

    setErrors(errors); //this updates the errors state and shows the errors
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault(); //stop page posting back
    if (!formIsValid()) return; //stop processing
    setSaving(true); //we are saving so set it to true
    saveMovie(movie) //if this promise is successful
      .then(() => {
        toast.success("Movie saved.");
        history.push("/movies"); //goes back to the last page
      })
      .catch(error => {
        //error handling
        setSaving(false); //we are not saving
        setErrors({ onSave: error.message }); //error message from apiserver.js line 74
      });
  }

  return movies.length === 0 ? ( //don't show the form yet as the async hasn't finished
    <Spinner />
  ) : (
    //show the form
    <MoviesForm
      movie={movie}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving} //parameters that get passed to the form
    />
  );
}

ManageMoviePage.propTypes = {
  movies: PropTypes.object.isRequired,
  movie: PropTypes.array.isRequired,
  loadMovies: PropTypes.func.isRequired,
  saveMovie: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
//slug is like the id parameter for urls.
//this loads the Movie up in the EDIT Movie page if there is a slug or the  ADD Movie without a slug
export function getMovieBySlug(movies, slug) {
  return movies.find(movie => movie.slug === slug) || null;
  //in all teh m, find the Movie where the slug === the Movie.slug in the url
}

//slugs is like ID
//ownprops give you and additions to your url that is populated by react router, you can use this to see where you have come from via the slug in App.js its referenced <Route path="/Movie/:slug" component={ManageMoviePage} />
function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug; //reading the slug from the url
  const movie =
    slug && state.movies.length > 0
      ? getMovieBySlug(state.movies, slug) //if there is a slug, we need to get the Movie in the slug otherwise its a new Movie  ===  function is above   && state.m.length > 0 means that it only runs when the m are loaded, becuase its async
      : newMovie;
  return {
    movie: movie,
    movies: state.movies
  };
}
// another way of creating MapDispatchtoProps - declare it as an object - using the OBJECT FORM
//beause we got rid of bindactioncreators we need t change the components above
//using named imports at the top makes it easier for below as well
const mapDispatchToProps = {
  loadMovies,
  saveMovie
};

// this  loadMovies: bindActionCreators(MovieActions.loadMovies, dispatch),
//becomes this  loadMovies: MovieActions.loadMovies
//and because of the tweek Object shorthand syntax - since the right matches the left
//ends up as just this loadMovies   - this can be confusing

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageMoviePage);
