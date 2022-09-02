module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-console': 'off',
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
        endOfLine: 'auto',
      },
    ],
  },
};
