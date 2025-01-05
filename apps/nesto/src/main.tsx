import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './app/routes/routes';
import { QueryDevtools } from '@nesto/shared';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();
const router = createRouter({
  routeTree,
  context: { queryClient },
});

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <QueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
