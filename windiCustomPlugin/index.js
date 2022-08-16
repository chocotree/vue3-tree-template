import plugin from 'windicss/plugin';
import { scrollbarPlugin } from './scrollbar';

export const windiCustomPlugin = [
  plugin(({ addUtilities }) => {
    const newFlex = {
      '.flex-center': {
        // justify-content
        '-webkit-box-pack': 'center',
        '-ms-flex-pack': 'center',
        '-webkit-justify-content': 'center',
        'justify-content': 'center',
        // align-items
        '-webkit-box-align': 'center',
        '-ms-flex-align': 'center',
        '-webkit-align-items': 'center',
        'align-items': 'center',
      },
      '.flex-i-center': {
        '-webkit-box-align': 'center',
        '-ms-flex-align': 'center',
        '-webkit-align-items': 'center',
        'align-items': 'center',
      },
      '.flex-j-center': {
        '-webkit-box-pack': 'center',
        '-ms-flex-pack': 'center',
        '-webkit-justify-content': 'center',
        'justify-content': 'center',
      },
    };
    addUtilities(newFlex);
  }),
  plugin(({ addUtilities }) => {
    const newSkeleton = {
      '@keyframes skeleton-loading': {
        to: {
          'background-position-x': '-20%',
        },
      },
      '.skeleton': {
        'background-color': '#ededed',
        background: 'linear-gradient(100deg, rgba(#fff, 0) 40%, rgba(#fff, 0.2) 50%, rgba(#fff, 0) 60%) #ededed',
        'background-size': '200% 100%',
        'background-position-x': '180%',
        animation: '1.3s skeleton-loading ease-in-out infinite',
      },
    };
    addUtilities(newSkeleton);
  }),
  scrollbarPlugin,
];
