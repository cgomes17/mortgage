const colours = {
  surface: {
    DEFAULT: 'var(--surface)',
    contrast: 'var(--surface-contrast)',
    'contrast-secondary': 'var(--surface-contrast-secondary)',
    'contrast-hover': 'var(--surface-contrast-hover)',
  },
  'surface-container': {
    DEFAULT: 'var(--surface-container)',
    contrast: 'var(--surface-container-contrast)',
    'contrast-secondary': 'var(--surface-container-contrast-secondary)',
  },
  'surface-container-secondary': {
    DEFAULT: 'var(--surface-container-secondary)',
    contrast: 'var(--surface-container-secondary-contrast)',
    'contrast-secondary':
      'var(--surface-container-secondary-contrast-secondary)',
  },
  primary: {
    DEFAULT: 'var(--primary)',
    contrast: 'var(--primary-contrast)',
  },
  secondary: {
    DEFAULT: 'var(--secondary)',
    contrast: 'var(--secondary-contrast)',
  },
  error: {
    DEFAULT: 'var(--error)',
    contrast: 'var(--error-contrast)',
  },
  success: {
    DEFAULT: 'var(--success)',
    contrast: 'var(--success-contrast)',
  },
};

export const tailwindPreset = {
  theme: {
    container: {
      padding: {
        lg: '4rem',
      },
    },
    fontFamily: {
      sans: ['Montserrat'],
      montserrat: ['Montserrat'],
    },
    extend: {
      colors: colours,
    },
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities, theme }) => {
      addUtilities({});
    },
  ],
  darkMode: 'class',
};
