import * as types from "../actions/actionTypes";
import initialState from "./initialState";
//state = [] state is initialized to an empty array - will store an array of courses when we have them
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    //look for our action type
    case types.CREATE_COURSE_SUCCESS:
      // debugger;
      //we can't mutate state so need to do a shallow copy of state above and add in the course using teh spread operator
      //whatever is returned from the reducer becomes the new state for that reducer
      return [...state, { ...action.course }];

    case types.UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    //map over the courses to return a new array where the ID is the same this returns a new array and Ican place a new value in the array  action.course : course  without changing the order of the array

    //also using teh concise syntax, as the return is implied as we don't use the curly braces after the arrow

    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    //important to always have a default, as all cases are checked and if another is used this one will just return the existing state.
    default:
      return state;
  }
}
