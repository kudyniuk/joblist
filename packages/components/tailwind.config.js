const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
import { theme } from '@kudyniuk/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: theme
  },
  plugins: [],
};
