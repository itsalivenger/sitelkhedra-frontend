import {
  Route,
  Redirect
} from 'react-router-dom';

function PublicRoute({ children, isAuthenticated, path }) {
  return (
    <Route
      path={path}
      render={
        ({ location }) => (
          !isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location }
              }}
            />
          ))
      }
    />
  );
}

export default PublicRoute;
