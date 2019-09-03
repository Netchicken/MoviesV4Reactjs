import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
//Action creators
export function createCourse(course) {
  //debugger;
  //all caps is to show its a constant - just a convention
  //Give it a type and pass along course as a payload
  //its an action creator as its creating an action type is the actions type and course data as action
  return { type: types.CREATE_COURSE, course };
}

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}
export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}
//our first thunk a function in a function  - thunk injects dispatch so we don't have to
//this gets run on the CoursePage.js
export function loadCourses() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        dispatch(apiCallError(error)); //throws the error to the thunk  API status will get updated to refelct the api call
        throw error;
      });
  };
}
//Thunk
export function saveCourse(course) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse)) //if there is a course id then do this
          : dispatch(createCourseSuccess(savedCourse)); //otherwise do this
      })
      .catch(error => {
        dispatch(apiCallError(error)); //throws the error to the thunk  API status will get updated to refelct the api call
        throw error;
      });
  };
}
