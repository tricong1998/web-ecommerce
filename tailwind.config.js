/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      cornflower: {
        light: '#f3f6fa',
      },
      error: '#c1170b',
      brand: {
        DEFAULT: '#00B0FF',
        100: '#B3E7FF',
        700: '#00B0FF',
        800: '#008DCC',
      },
      primary: {
        light: 'rgba(0, 161, 156, 0.5)',
        DEFAULT: '#00a19c',
      },
      background: {
        DEFAULT: '#F5F5F5',
      },
      white: {
        DEFAULT: '#fff',
        off: '#f7fafc',
      },
      black: {
        ...colors.black,
        light: '#2d333a',
        DEFAULT: '#000',
        raisin: '#202020',
      },
      gray: {
        ...colors.gray,
        DEFAULT: '#788494',
        base: '#EAEBEE',
        catskill: '#E2E8F0',
        athens: '#eceef1',
        trout: '#525B65',
        100: '#E4EAF4',
        200: '#D2DCEC',
        300: '#D1D5DB',
        400: '#9CA3AF',
        700: '#d0d4d9',
        800: '#DFE5EF',
        900: '#E3E3E3',
      },
      grey: {
        100: '#F8F9F9',
        800: '#BCBFC5',
      },
      red: {
        ...colors.red,
        monza: '#d5190c',
        milano: '#C1170B',
        bright: '#f44336',
        bridesmaid: '#fee8e7',
      },
      blue: {
        ...colors.blue,
        base: '#2F48FA',
        cobalt: '#0152b2',
        solitude: '#e6f1ff',
        dodger: '#00B0FF',
        dodger2: '#459AFE',
      },
      green: {
        ...colors.green,
        shamrock: '#2ECC71',
        iceberg: '#E0F4F3',
      },
      yellow: {
        ...colors.yellow,
        orange: '#FFB53B',
        supernova: '#FFC600',
        pirate: '#CC7F00',
        sandy: '#FFECCC',
      },
      purple: {
        ...colors.purple,
        base: '#6E2FEB',
        heart: '#5916DF',
      },
      carbon: {
        DEFAULT: '#123F68',
        200: '#416586',
        700: '#0e3253',
        800: '#0B263E',
      },
      success: {
        100: '#D5F6E3',
        700: '#249E58',
        800: '#1A7441',
      },
      warning: {
        700: '#CC7F00',
        800: '#804F00',
      },
      petronas: {
        100: '#B3E3E1',
        500: '#00A19C',
        700: '#008F8A',
      },
      btn: {
        focus: '#B8C5D2',
      },
    },
    extend: {
      boxShadow: {
        ...defaultTheme.boxShadow,
        header: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        xlarge:
          '0px 0px 12px 2px rgba(0, 0, 0, 0.08), 0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 25px 50px -12px rgba(0, 0, 0, 0.15)',
        buttonAddToCart: '0px -1px 3px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        ultra: '1440px',
        wide: '1180px',
        large: '880px',
        medium: '720px',
        md_820: '820px',
        md_910: '910px',
        small: '680px',
      },
    },
  },
  plugins: [],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
};
