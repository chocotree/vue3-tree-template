import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import plugin from 'windicss/plugin';
import { windiCustomPlugin } from './windiCustomPlugin';

export default defineConfig({
  darkMode: 'class', // or 'media'
  attributify: true,
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        blue: colors.sky,
        red: colors.rose,
        pink: {
          e84989: '#e84989',
          ff729d: '#ff729d',
        },
        yellow: {
          fed838: '#fed838',
        },
        gray: {
          dark: '#737373',
          777: '#777',
          e9e9e9: '#e9e9e9',
          ededed: '#ededed',
          e0e0e0: '#e0e0e0',
          d5d5d5: '#d5d5d5',
          d6d6d6: '#d6d6d6',
          b2b2b2: '#b2b2b2',
          bdbdbd: '#bdbdbd',
          454343: '#454343',
          919191: '#919191',
          '272b36': '#272b36',
          565962: '#565962',
          '3b3b3b': '#3b3b3b',
          f5f5f5: '#f5f5f5',
          ddd: '#ddd',
          bebebe: '#bebebe',
          333: '#333',
          666: '#666',
          bbb: '#bbb',
          '4f4e4e': '#4f4e4e',
          d3d3d3: '#d3d3d3',
          797777: '#797777',
          707070: '#707070',
          '2b2b2b': '#2b2b2b',
          f7f7f7: '#f7f7f7',
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(({ addDynamic, variants }) => {
      addDynamic(
        'skew',
        ({ Utility, Style }) => {
          return Utility.handler
            .handleStatic(Style('skew'))
            .handleNumber(0, 360, 'int', (number) => `skewY(-${number}deg)`)
            .createProperty('transform');
        },
        variants('skew')
      );
    }),
    ...windiCustomPlugin,
    require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
  ],
});
