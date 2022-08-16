import plugin from 'windicss/plugin';

/*
  scrollbar 也可以參考 community plugin
  https://windicss.org/plugins/community/scrollbar.html

  此 plugin 與上方不衝突
*/

export const scrollbarPlugin = plugin(({ addUtilities }) => {
  /**
   * 可以在這邊新增更多顏色
   */
  const colorMapList = [
    { colorKey: 'pink', colorValue: '#ff729d' },
    { colorKey: 'orange', colorValue: '#ff8800' },
  ];

  const noScrollbar = {
    /* Hide scrollbar for Chrome, Safari and Opera */
    '.no-scrollbar::-webkit-scrollbar': {
      display: 'none',
    },
    /* Hide scrollbar for IE, Edge and Firefox */
    '.no-scrollbar': {
      '-ms-overflow-style': 'none',
      'scrollbar-width': 'none',
    },
  };

  noScrollbar['.scrollbar-none'] = noScrollbar['.no-scrollbar'];
  noScrollbar['.scrollbar-none::-webkit-scrollbar'] = noScrollbar['.no-scrollbar::-webkit-scrollbar'];

  let colorfulScrollbar = {};

  colorMapList.forEach((colorItem) => {
    const newScrollbar = {
      [`.scrollbar-${colorItem.colorKey}`]: {},
      [`.scrollbar-${colorItem.colorKey}::-webkit-scrollbar-track`]: {
        'border-radius': '10px',
        background: 'transparent',
      },
      [`.scrollbar-${colorItem.colorKey}::-webkit-scrollbar`]: {
        width: '5px',
        height: '5px',
        background: 'transparent',
      },
      [`.scrollbar-${colorItem.colorKey}::-webkit-scrollbar-thumb`]: {
        'border-radius': '10px',
        background: colorItem.colorValue,
      },
    };
    colorfulScrollbar = { ...colorfulScrollbar, ...newScrollbar };
  });

  addUtilities({ ...noScrollbar, ...colorfulScrollbar });
});
