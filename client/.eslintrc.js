module.exports = {
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0
  }
};
