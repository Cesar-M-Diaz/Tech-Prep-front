import { Router, Switch, Route } from 'react-router-dom';
import history from './utils/history';
import LandingPage from './pages/LandingPage';
import Register from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import CreateCard from './pages/CreateCardPage';
import './assets/styles/pages/App.css';

function App() {
  return (
    <Router history={history}>
      {/* <ScrollToTop /> */}
      {/* <Route exact path="/home" component={HomePage} /> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LoginPage} />
        <Layout>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/add_questions" component={CreateCard} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
