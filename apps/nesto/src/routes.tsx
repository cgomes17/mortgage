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
        to: '/offers',
        throw: true,
      });
    },
  }),
  createRoute({
    path: 'mortgage-rates',
    getParentRoute: () => rootRoute,
    loader: () => {
      redirect({
        href: 'https://www.nesto.ca/mortgage-rates/',
        throw: true,
        replace: true,
      });
    },
  }),
  createRoute({
    path: 'about-us',
    getParentRoute: () => rootRoute,
    loader: () => {
      redirect({
        href: '  https://www.nesto.ca/about-us/',
        throw: true,
        replace: true,
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
