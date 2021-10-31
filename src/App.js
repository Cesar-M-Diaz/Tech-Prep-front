import { Router, Switch, Route } from 'react-router-dom';
import history from './utils/history';
import Register from './pages/RegisterPage';
import './assets/styles/pages/App.css';

function App() {
  return (
    <Router history={history}>
      {/* <ScrollToTop /> */}
      {/* <Layout> */}
      <Switch>
        {/* <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={LandingPage} /> */}
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/login" component={LoginPage} />
        <Route path="*" component={errorPage} /> */}
      </Switch>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
