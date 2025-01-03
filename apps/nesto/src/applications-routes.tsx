import { createRoute, RootRoute } from '@tanstack/react-router';

export const getApplicationsRoute = (rootRoute: RootRoute) => {
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
      path: '/create',
    }).lazy(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (): Promise<any> =>
        import('@nesto/applications/create').then((d) => d.applicationsCreate)
    ),
  ]);

  return applicationsRoute;
};
