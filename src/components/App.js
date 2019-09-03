import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import MoviesPage from "./movies/MoviesPage";
import ManageMoviesPage from "./movies/ManageMoviesPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //make toasts throughout the site
//comments  {
//"slug is like an ID but its easer to read instead of a number slug needs to be decalared first as you drop down through the switch options and the slug needs to come before no slug" Slug is an URL friendly ID

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/movies/:slug" component={ManageMoviesPage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/movie" component={ManageMoviesPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
