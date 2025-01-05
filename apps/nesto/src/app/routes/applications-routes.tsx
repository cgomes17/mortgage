import { createRoute, redirect, RootRoute } from '@tanstack/react-router';
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
      loader: () => {
        redirect({
          to: 'create',
          throw: true,
          replace: true,
        });
      },
    }),
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
