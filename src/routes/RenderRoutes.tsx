import { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('components/Feedback/NotFound'));

type routeItem = {
    path: string,
    key: string,
    exact: boolean,
    component: Function,
}

type routes = routeItem & {
    routes?: routeItem[]
}

const ROUTES: routes[] = [
    {
        path: "/",
        key: "ROOT",
        exact: true,
        component: (props: any) => {
            return <RenderRoutes {...props} />;
        },
        routes: [
            {
                path: "/",
                key: "ROOT",
                exact: true,
                component: Home,
            }
        ]
    },
];

export default ROUTES


export function RenderRoutes({ routes }: { routes: routes[] }) {
    
    return (
        <Switch>
            {routes.map((route, i) => {
                return <RouteWithSubRoutes {...route} />;
            })}

            <Route component={NotFound} />
        </Switch>
    );
}

function RouteWithSubRoutes(route: routes) {
    return (
        <Route
            key={route.key}
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    );
}
