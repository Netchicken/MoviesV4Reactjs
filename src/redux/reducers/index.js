import { combineReducers } from "redux"; //named import
import courses from "./courseReducer"; //you can name it anything you like
import authors from "./authorReducer"; //you can name it anything you like
import movies from "./movieReducer"; //you can name it anything you like
import apiCallsInProgress from "./apiStatusReducer";
//want to combine all our reducers together
const rootReducer = combineReducers({
  courses,
  authors,
  movies,
  apiCallsInProgress
});

export default rootReducer;

//when you create a new reducer you need to reference it in your root reducer
