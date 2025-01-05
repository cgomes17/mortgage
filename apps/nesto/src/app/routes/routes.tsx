import { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  createRoute,
  redirect,
} from '@tanstack/react-router';
import { App } from '../app';
import Main from '../main/main';
import { getApplicationsRoute } from './applications-routes';
import { RootContext } from './context';

export const rootRoute = createRootRouteWithContext<RootContext>()({
  component: App,
});

export const routeTree = rootRoute.addChildren([
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
