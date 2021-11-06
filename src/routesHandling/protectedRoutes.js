import { Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import { lazy } from "react";

const routes = [
    {
      path: 'Cartel',
      component: lazy(()=> import('../cartel/cartel.js')),
      exact: true
    },
    {
      path: 'profile',
      component: lazy(()=> import('../profile/profile.js')),
      exact: true
    },
    {
      path: 'logout',
      component: lazy(()=> import('../logout.js')),
      exact: true
    }
  ];


export default function ProtectedRoutes({ isAdmin, setIsAuthenticated }) {
    return (
        <Switch>
            <Suspense fallback={<h1>loading...</h1>}>
                {routes.map(({component: Component, path, exact})=>{
                    return (<Route path={`/${path}`} key={path} exact={exact}>
                                <Component isAdmin={isAdmin} setIsAuthenticated={setIsAuthenticated} />
                            </Route>)
                })}
            </Suspense>
        </Switch>
    )
}
