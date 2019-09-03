export const CREATE_COURSE = "CREATE_COURSE";
export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";

export const CREATE_MOVIE = "CREATE_MOVIE";
export const LOAD_MOVIES_SUCCESS = "LOAD_MOVIES_SUCCESS";
export const CREATE_MOVIE_SUCCESS = "CREATE_MOVIE_SUCCESS";
export const UPDATE_MOVIE_SUCCESS = "UPDATE_MOVIE_SUCCESS";

//create our actiontypes as consts to stop typos and then import this file into the courseactions and coursereducers and get out type.whatever

export const BEGIN_API_CALL = "BEGIN_API_CALL"; //to know when an api call is happening to trigger the spinner
export const API_CALL_ERROR = "API_CALL_ERROR"; //when the api counter is not decrementing on errors

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
