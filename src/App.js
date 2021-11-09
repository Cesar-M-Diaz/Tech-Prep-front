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
import { useSelector, useDispatch } from 'react-redux';
import getUserData from './actions/getUserData';
import { AUTH_FAILED } from './actions/constants';
import './assets/styles/pages/App.css';

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
      {/* <ScrollToTop /> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LoginPage} />
        <Layout>
          <PrivateRoute exact path="/home" component={HomePage} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/add_questions" component={CreateCard} />
          <PrivateRoute exact path="/train" component={SelectLevelPage} />
          <PrivateRoute exact path="/train/score" component={ScorePage} />
          <PrivateRoute exact path="/train/game" component={GamePage} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
