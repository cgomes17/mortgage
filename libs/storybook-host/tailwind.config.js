// eslint-disable-next-line @nx/enforce-module-boundaries
import { tailwindPreset } from '../../tailwind-preset.config';
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/!(*.spec).{ts,tsx,html,mdx}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    'libs/shared/{src,pages,components,app}/**/!(*.spec).{ts,tsx,html,mdx}',
  ],
  presets: [tailwindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
