import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Router, Route, Switch } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker'
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import JournalismPage from "views/JournalismPage/JournalismPage.js";
import JournalismSection from 'views/JournalismPage/Sections/JournalismSection.js'
import PublishedSection from 'views/JournalismPage/Sections/PublishedSection.js'
import LifestylePage from "views/LifestylePage/LifestylePage.js";
import LifestyleSection from 'views/LifestylePage/Sections/LifestyleSection.js'
import MentalHealthPage from "views/MentalHealthPage/MentalHealthPage.js";
import MentalHealthSection from 'views/MentalHealthPage/Sections/MentalHealthSection.js'
import LoginPage from "views/LoginPage/LoginPage.js";
import BlogPage from 'views/BlogPage/BlogPage.js'
import ProfilePage from "views/ProfilePage/ProfilePage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/lifestyle" component={LifestylePage} />
      <Route path="/journalism" component={JournalismPage} />
      <Route path="/mental-health" component={MentalHealthPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path='/holmes' component={BlogPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
)
registerServiceWorker()
