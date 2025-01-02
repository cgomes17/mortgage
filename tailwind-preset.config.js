const colours = {
  surface: {
    DEFAULT: 'var(--surface)',
    contrast: 'var(--surface-contrast)',
    'contrast-secondary': 'var(--surface-contrast-secondary)',
  },
  'surface-container': {
    DEFAULT: 'var(--surface-container)',
    contrast: 'var(--surface-container-contrast)',
    'contrast-secondary': 'var(--surface-container-contrast-secondary)',
  },
  primary: {
    DEFAULT: 'var(--primary)',
    contrast: {
      DEFAULT: 'var(--primary-contrast)',
    },
  },
  secondary: {
    DEFAULT: 'var(--secondary)',
    contrast: {
      DEFAULT: 'var(--secondary-contrast)',
    },
  },
  error: {
    DEFAULT: 'var(--error)',
    contrast: {
      DEFAULT: 'var(--error-contrast)',
    },
  },
  success: {
    DEFAULT: 'var(--success)',
    contrast: {
      DEFAULT: 'var(--success-contrast)',
    },
  },
};

export const tailwindPreset = {
  theme: {
    fontFamily: {
      sans: ['Montserrat'],
      montserrat: ['Montserrat'],
    },
    extend: {
      colors: colours,
    },
  },
  darkMode: 'class'
};
