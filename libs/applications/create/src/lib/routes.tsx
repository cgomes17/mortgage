import { createLazyRoute } from '@tanstack/react-router';
import Main from './main/main';

export const applicationsCreate = createLazyRoute('/create')({
  component: Main,
});
