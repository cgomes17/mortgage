import {
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from '@tanstack/react-router';
import { App } from './app/app';
import { getApplicationsCreateRoute } from '@nesto/applications/create';
import Main from './app/main/main';

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
  getApplicationsCreateRoute(rootRoute),
  createRoute({
    path: '/products',
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
