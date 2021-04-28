<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyPage from "./pages/MyPage";
import Auth from "./hoc/auth";
=======
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PointPage from './pages/PointPage';
import Auth from './hoc/auth';
>>>>>>> origin/halim_aca


function App() {
  return (
    <Router>
      <div>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/myPage" component={Auth(MyPage, false)} />
=======
          <Route exact path="/" component={Auth(LandingPage,null)} />
          <Route exact path="/login" component={Auth(LoginPage,false)} />
          <Route exact path="/register" component={Auth(RegisterPage,false)} />
          <Route exact path="/point" component={Auth(PointPage,true)} />
>>>>>>> origin/halim_aca
        </Switch>
      </div>
    </Router>
  );
}

export default App;
