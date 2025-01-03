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
    fontFamily: {
      sans: ['Montserrat'],
      montserrat: ['Montserrat'],
    },
    extend: {
      colors: colours,
    },
  },
  darkMode: 'class',
};
