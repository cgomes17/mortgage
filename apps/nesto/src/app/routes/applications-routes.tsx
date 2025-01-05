import { createRoute, RootRoute } from '@tanstack/react-router';
import { RootContext } from './context';

export const getApplicationsRoute = (
  rootRoute: RootRoute<undefined, RootContext>
) => {
  const applicationsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/applications',
  }).lazy(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (): Promise<any> =>
      import('@nesto/applications/core').then((d) => d.applicationsCore)
  );

  applicationsRoute.addChildren([
    createRoute({
      getParentRoute: () => applicationsRoute,
      path: '/',
    }).lazy(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (): Promise<any> =>
        import('@nesto/applications/list').then((d) => d.applicationsList)
    ),
    createRoute({
      getParentRoute: () => applicationsRoute,
      path: '/create',
    }).lazy(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (): Promise<any> =>
        import('@nesto/applications/create').then((d) => d.applicationsCreate)
    ),
    createRoute({
      getParentRoute: () => applicationsRoute,
      path: '/$applicationId',
    }).lazy(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (): Promise<any> =>
        import('@nesto/applications/details').then((d) => d.applicationsDetails)
    ),
  ]);

  return applicationsRoute;
};
