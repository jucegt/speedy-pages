module.exports = {
  env: {
    commonjs: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'quotes': ['error', 'single'],
    'no-undef': ['error'],
    'semi': ['error', 'always'],
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
