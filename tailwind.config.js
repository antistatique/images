/* eslint-disable global-require */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-expressions */
const baseColors = {
  magenta: '#ff0099',
  magentaLight: '#ffeff0',
  magentaDark: '#d1007e',
  limonade: '#fff618',
  balsamique: '#570039',
  balsamiqueLight: '#b26d9a',
  flamantRose: '#ff7495',
  minuit: '#000032',
  sensei: '#4d4d70',
  ninja: '#808098',
  gray: {
    background: '#f2f2f5',
    disabled: '#a9a9b8',
    border1: '#e6e6eb',
    border2: '#dadae0',
  },
};

module.exports = {
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['15px', '22px'],
      base: ['16px', '24px'],
      lg: ['18px', '27px'],
      xl: ['21px', '32px'],
      '2xl': ['27px', '40px'],
      '3xl': ['34px', '40px'],
      '4xl': ['52px', '62px'],
      '5xl': ['72px', '86px'],
      '6xl': ['100px', '100px'],
    },
    extend: {
      fontFamily: {
        sans: [
          'RegolaPro',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          'Fragen',
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        mono: [
          'Fira Code VF',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        magenta: {
          light: baseColors.magentaLight,
          DEFAULT: baseColors.magenta,
          dark: baseColors.magentaDark,
        },
        limonade: baseColors.limonade,
        balsamique: {
          light: baseColors.balsamiqueLight,
          DEFAULT: baseColors.balsamique,
        },
        'flamant-rose': baseColors.flamantRose,
        minuit: baseColors.minuit,
        sensei: baseColors.sensei,
        ninja: baseColors.ninja,
        primary: {
          light: baseColors.magentaLight,
          DEFAULT: baseColors.magenta,
          dark: baseColors.magentaDark,
        },
        secondary: {
          light: baseColors.balsamiqueLight,
          DEFAULT: baseColors.balsamique,
        },
        gray: {
          lightest: baseColors.gray.background,
          light: baseColors.gray.border1,
          DEFAULT: baseColors.gray.border2,
          dark: baseColors.gray.disabled,
          darkest: baseColors.ninja,
        },
      },
      lineHeight: {
        tighter: '0.9',
      },
      spacing: {
        18: '4.5rem',
        50: '12.5rem',
      },
      borderWidth: {
        3: '3px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};