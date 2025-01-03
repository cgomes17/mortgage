import {
  createRoute,
  lazyRouteComponent,
  RootRoute,
  Route,
} from '@tanstack/react-router';

export const getApplicationsCreateRoute = (parentRoute: RootRoute | Route) =>
  createRoute({
    path: '/applications/create',
    getParentRoute: () => parentRoute,
    component: lazyRouteComponent(() => import('./main/main')),
  });
