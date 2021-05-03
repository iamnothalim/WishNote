import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyPage from "./pages/MyPage";
import PointPage from "./pages/PointPage";
import Auth from "./hoc/auth";
import FeedUploadPage from './components/feed/FeedUploadPage';
import DetailFeedPage from './components/feed/DetailFeedPage';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/myPage" component={Auth(MyPage, true)} />
          <Route exact path="/point" component={Auth(PointPage, true)} />
          <Route exact path="/feed/upload" component={Auth(FeedUploadPage, true)} />
          <Route exact path="/feed/:feedId" component={Auth(DetailFeedPage, null)} />
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
