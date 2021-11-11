import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { AUTHORIZED, LOADING } from '../actions/constants';
import Loader from '../components/Loader';
import '../assets/styles/components/PrivateRoute.scss';

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const authUser = useSelector((state) => state.auth_status);
  if (authUser === LOADING) return <Loader />;
  return (
    <Route
      {...rest}
      render={(props) =>
        authUser === AUTHORIZED ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
