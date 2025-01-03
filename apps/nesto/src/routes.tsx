import {
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from '@tanstack/react-router';
import App from './app/app';

export const rootRoute = createRootRoute({
  component: App,
});

const routeTree = rootRoute.addChildren([
  createRoute({
    path: '/',
    getParentRoute: () => rootRoute,
    loader: () => {
      redirect({
        to: '/apply',
        throw: true,
      });
    },
  }),
  createRoute({
    path: '/apply',
    getParentRoute: () => rootRoute,
    component: () => <div>Apply</div>,
  }),
  createRoute({
    path: '/contact',
    getParentRoute: () => rootRoute,
    component: () => <div>Contact</div>,
  }),
]);

export const router = createRouter({ routeTree });
