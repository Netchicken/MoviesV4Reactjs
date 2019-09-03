import React from "react";
import { connect } from "react-redux";
import * as MovieActions from "../../redux/actions/movieActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import MovieList from "./MovieList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner"; //busy waiting spinner
//This page is a container component, it should not have must front end stuff in it but just the backend,
class MoviesPage extends React.Component {
  state = {
    redirectToAddMoviePage: false //set to true when button clicked in render
  };

  componentDidMount() {
    //load the list of Movies when the page loads from the mapDispatchToProps at the bottom
    this.props.actions.loadMovies().catch(error => {
      alert("Loading Movies Failed " + error);
    });
  }

  render() {
    return (
      <>
        {this.state.redirectToAddMoviePage && <Redirect to="/movie" />
        //.right hand side only evaluates if left hand side is true
        }
        <h2>Movies</h2>
        {this.props.loading ? ( //if the loading is true then show the spinner
          <Spinner />
        ) : (
          //otherwise show the button and the table
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-Movie"
              onClick={() => this.setState({ redirectToAddMoviePage: true })}>
              Add Movie
            </button>

              <MovieList
                onDeleteClick={this.handleDeleteMovie}
                movies={this.props.movies}
                debugger
            />
          </>
        )}
      </>
    );
  }
}

MoviesPage.propTypes = {
  movies: PropTypes.array.isRequired,
  // dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

//data going into this component (this page) we are sending in the Movies only to cut down the load
//state going in is the new state from the redux that is triggered from hitting submit

function mapStateToProps(state) {
  //debugger;
  return {
    movies: state.movies,
    //create a bool that is true when there is an api call in progress
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  //dispatch is what comes from redux and it gets passed through the props of this component
  //bindActionCreators wraps all the MovieActions in a calltodispatch, covers all actions in the future
  //because auther and Movies are scync we need to check that bot are available before we can run the map
  return {
    actions: {
      loadMovies: bindActionCreators(MovieActions.loadMovies, dispatch)
    }
  };
}

//connect function connects our component to redux
//  mapDispatchToProps left out as it use an auto dispatcher
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesPage);
