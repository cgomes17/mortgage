import { createLazyRoute } from '@tanstack/react-router';
import { Main } from './main/main';

export const applicationsList = createLazyRoute('/')({
  component: Main,
});
