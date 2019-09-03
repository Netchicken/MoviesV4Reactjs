import * as types from "../actions/actionTypes";
import initialState from "./initialState";

//if the action type that has been called ends in success LOAD_COURSES_SUCCESS then return a true
function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress, //our count of api calls happening
  action
) {
  if (action.type == types.BEGIN_API_CALL) {
    return state + 1; //increase the apicall by 1
  } else if (
    action.type === types.API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type) // == true
  ) {
    return state - 1; //decrease the apicall by 1
  }

  return state;
}

//when you create a new reducer you need to reference it in your root reducer
