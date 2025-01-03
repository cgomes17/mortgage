import { createLazyRoute } from '@tanstack/react-router';
import { Main } from './main/main';

export const applicationsCore = createLazyRoute('/applications')({
  component: Main,
});
