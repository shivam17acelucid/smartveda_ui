const config = {
  screen: {
    welcome: {
      path: 'signupoption',
    },
    preferrenceScreen: {
      path: 'preferrenceScreen',
      parse: {
        id: id => `${id}`,
      },
    },
  },
};

export default config;
