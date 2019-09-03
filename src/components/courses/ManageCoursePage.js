import React, { useEffect, useState } from "react"; //useeffect  usestate is a hook
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner"; //busy waiting spinner
import { toast } from "react-toastify";

//THIS IS A DEDICATED PAGE FOR ADDING AND EDITING COURSES
//it is the backend for add and edit course

//this page will be using HOOKS and replace componentdidmount
//Hooks allow us to handle state and side effects within function components so we don't need to declare class components any more prefer function compoenets over class components as they are easier to work with and understand

function ManageCoursePage({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  history, //browser history so we can go back to earlier page history object gets passd in automatically from react router
  saveCourse, //this matches the one we have set in mapdispatchtoprops
  ...props // ...props does all the properties we havn't explicittly destructured above, loadAuthors etc,
}) {
  //}) {

  //     variables that are set,                 set from props.course
  const [course, setCourse] = useState({ ...props.course }); //useState lets us add react state to function components
  const [errors, setErrors] = useState({}); //holds any errors that occur when we run validation
  const [saving, setSaving] = useState(false); //are we saving the form? No

  useEffect(() => {
    //useeffect will accept a function it will call and will rerun every time the component renders

    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    } else {
      setCourse({ ...props.course }); //need this to load the form directly from the url
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }, [props.course]); //we declare a second component that means it only runs when the array changes declaring an empty array means it works the same as compoenetn did mount (becuase nothing ever changes) So with props.courses it loads when the courses change

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value //use parseint to pass through a default value otherwise pass in the value directly
    }));
  }

  //all this function does is return a bool for valid true false
  function formIsValid() { //client side validation this is faster than the one in apiserver.js which is server sided
    const { title, authorId, category } = course;
    const errors = {}; //make an error object

    //add in any errors
    if (!title) errors.title = "Title is required.";
    if (!authorId) errors.author = "Author is required";
    if (!category) errors.category = "Category is required";

    setErrors(errors); //this updates the errors state and shows the errors
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault(); //stop page posting back
     if (!formIsValid()) return; //stop processing
    setSaving(true); //we are saving so set it to true
    saveCourse(course) //if this promise is successful
      .then(() => {
        toast.success("Course saved.");
        history.push("/courses"); //goes back to the last page
      })
    .catch(error => { //error handling
      setSaving(false); //we are not saving
      setErrors({ onSave: error.message });  //error message from apiserver.js line 74
    });
  }

  return authors.length === 0 || courses.length === 0 ? ( //don't show the form yet as the async hasn't finished
    <Spinner />
  ) : (
    //show the form
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving} //parameters that get passed to the form
    />
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
//slug is like the id parameter for urls.
//this loads the course up in the EDIT course page if there is a slug or the  ADD course without a slug
export function getCourseBySlug(courses, slug) {
  return courses.find(course => course.slug === slug) || null;
  //in all teh courses, find the course where the slug === the course.slug in the url
}

//slugs is like ID
//ownprops give you and additions to your url that is populated by react router, you can use this to see where you have come from via the slug in App.js its referenced <Route path="/course/:slug" component={ManageCoursePage} />
function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug; //reading the slug from the url
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug) //if there is a slug, we need to get the course in the slug otherwise its a new course  ===  function is above   && state.courses.length > 0 means that it only runs when the courses are loaded, becuase its async
      : newCourse;
  return {
    course: course,
    courses: state.courses,
    authors: state.authors
  };
}
// another way of creating MapDispatchtoProps - declare it as an object - using the OBJECT FORM
//beause we got rid of bindactioncreators we need t change the components above
//using named imports at the top makes it easier for below as well
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse
};

// this  loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
//becomes this  loadCourses: courseActions.loadCourses
//and because of the tweek Object shorthand syntax - since the right matches the left
//ends up as just this loadCourses   - this can be confusing

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
