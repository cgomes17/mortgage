// eslint-disable-next-line @nx/enforce-module-boundaries
import { tailwindPreset } from '../../tailwind-preset.config';
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [tailwindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
