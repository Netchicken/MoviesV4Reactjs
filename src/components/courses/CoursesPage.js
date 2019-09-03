import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner"; //busy waiting spinner
//This page is a container component, it should not have must front end stuff in it but just the backend,
class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false //set to true when button clicked in render
  };

  componentDidMount() {
    //load the list of courses when the page loads from the mapDispatchToProps at the bottom
    this.props.actions.loadCourses().catch(error => {
      alert("Loading Courses Failed " + error);
    });

    this.props.actions.loadAuthors().catch(error => {
      alert("Loading Authors Failed " + error);
    });
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />
        //.right hand side only evaluates if left hand side is true
        }
        <h2>Courses</h2>
        {this.props.loading ? ( //if the loading is true then show the spinner
          <Spinner />
        ) : (
          //otherwise show the button and the table
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddCoursePage: true })}>
              Add Course
            </button>

            <CourseList
              onDeleteClick={this.handleDeleteCourse}
              courses={this.props.courses}
            />
          </>
        )}
      </>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  // dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

//data going into this component (this page) we are sending in the courses only to cut down the load
//state going in is the new state from the redux that is triggered from hitting submit
//we want to weave in each authors name with the course id map over the rouse and add in an authorName property for the object  state.authors.length ===0 ? [] : if the state length is ===0 return an empty array, otherwise return the map
function mapStateToProps(state) {
  //debugger;
  return {
    courses:
      state.authors.length === 0
        ? [] //no author data return empty array []
        : state.courses.map(course => {
            //have data do shit
            return {
              ...course,
              authorName: state.authors.find(a => a.id === course.authorId).name
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0 //create a bool that is true when there is an api call in progress
  };
}
function mapDispatchToProps(dispatch) {
  //dispatch is what comes from redux and it gets passed through the props of this component
  //bindActionCreators wraps all the courseActions in a calltodispatch, covers all actions in the future
  //because auther and courses are scync we need to check that bot are available before we can run the map
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}
//connect function connects our component to redux
//  mapDispatchToProps left out as it use an auto dispatcher
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
