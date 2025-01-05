const colours = {
  surface: {
    DEFAULT: 'var(--surface)',
    contrast: 'var(--surface-contrast)',
    'contrast-variant': 'var(--surface-contrast-variant)',
    'contrast-hover': 'var(--surface-contrast-hover)',
  },
  'surface-container': {
    DEFAULT: 'var(--surface-container)',
    contrast: 'var(--surface-container-contrast)',
    'contrast-variant': 'var(--surface-container-contrast-variant)',
  },
  'surface-container-secondary': {
    DEFAULT: 'var(--surface-container-secondary)',
    contrast: 'var(--surface-container-secondary-contrast)',
    'contrast-variant': 'var(--surface-container-secondary-contrast-variant)',
  },
  primary: {
    DEFAULT: 'var(--primary)',
    contrast: 'var(--primary-contrast)',
    'contrast-variant': 'var(--primary-contrast-variant)',
  },
  secondary: {
    DEFAULT: 'var(--secondary)',
    contrast: 'var(--secondary-contrast)',
    'contrast-variant': 'var(--secondary-contrast-variant)',
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
        md: '3rem',
        sm: '2rem'
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
