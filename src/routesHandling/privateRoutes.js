import {
  Route,
  Redirect
} from 'react-router-dom';

function PrivateRoutes({ children, isAuthenticated, path }) {
  return (
    <Route
      render={
        ({ location }) => (
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          ))
      }
    />
  );
}

export default PrivateRoutes;
