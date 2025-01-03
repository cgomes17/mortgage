import {
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from '@tanstack/react-router';
import { App } from './app/app';
import Main from './app/main/main';
import { applicationsRoute, getApplicationsRoute } from './applications-routes';

export const rootRoute = createRootRoute({
  component: App,
});

const routeTree = rootRoute.addChildren([
  createRoute({
    path: '/',
    getParentRoute: () => rootRoute,
    component: Main,
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
    path: '/contact',
    getParentRoute: () => rootRoute,
    component: () => <div>Contact</div>,
  }),
  getApplicationsRoute(rootRoute),
]);

export const router = createRouter({ routeTree });
