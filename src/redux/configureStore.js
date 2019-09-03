import { createStore, applyMiddleware, compose } from "redux"; //applyMiddleware allows us to add in other features
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"; //this is the middleware we add in
import thunk from 'redux-thunk';

//this is our store

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools from the browser

  //this configures our store by taking teh initial state and our reducers
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())) //here we are adding in the middleware - this warns us if we accidentally mutate any state in the redux store - safety net
  );
}
