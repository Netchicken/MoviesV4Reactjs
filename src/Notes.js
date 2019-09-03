//to create a new action
//1 generate an action type export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
//2 create a new actions class authorAction.js
//3 Create a new reducer Authorreducer.js
//4 Update the root reducer in index.js  with author
//on the page import author actions  import * as authorActions from "../../redux/actions/authorActions";
//go to mapDispatchToProps, and pass into the page the specfic action we need  loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
//update componentdidmount to load author data this.props.actions.loadAuthors()
//===================

//we want to weave in each authors name with the course id
//

// "scripts": {
//    "start":   "run-p start:dev start:api",
//     "start:dev": "webpack-dev-server --config webpack.config.dev.js --port 3000",
//     "prestart:api": "node tools/createMockDb.js",
//     "start:api": "node tools/SQLiteServer.js"
//   },
