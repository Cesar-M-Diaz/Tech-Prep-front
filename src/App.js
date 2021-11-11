import { Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { useEffect } from 'react';
import history from './utils/history';
import LandingPage from './pages/LandingPage';
import Register from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import CreateCard from './pages/CreateCardPage';
import SelectLevelPage from './pages/SelectLevelPage';
import GamePage from './pages/GamePage';
import ScorePage from './pages/ResultPage';
import ErrorPage from './pages/ErrorPage';
import ScrollToTop from './utils/ScrollToTop';
import SessionsPage from './pages/SessionsPage';
import { useSelector, useDispatch } from 'react-redux';
import getUserData from './actions/getUserData';
import { AUTH_FAILED } from './actions/constants';
import './assets/styles/pages/App.css';
import SessionScorePage from './pages/SessionScore';

function App() {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== null) {
      dispatch(getUserData(token));
    } else {
      dispatch({ type: AUTH_FAILED });
    }
  }, [dispatch, token]);

  return (
    <Router history={history}>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/home" layout={Layout} component={HomePage} />
        <PrivateRoute exact path="/profile" layout={Layout} component={Profile} />
        <PrivateRoute exact path="/add_questions" layout={Layout} component={CreateCard} />
        <PrivateRoute exact path="/train" layout={Layout} component={SelectLevelPage} />
        <PrivateRoute exact path="/train/score/:id" layout={Layout} component={ScorePage} />
        <PrivateRoute exact path="/session/:id" layout={Layout} component={GamePage} />
        <PrivateRoute exact path="/train/game/:id" layout={Layout} component={GamePage} />
        <PrivateRoute exact path="/sessions" layout={Layout} component={SessionsPage} />
        <PrivateRoute
          exact
          path="/session/score/:id"
          layout={Layout}
          component={SessionScorePage}
        />
        <PrivateRoute path="*" layout={Layout} component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
