module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-underscore-dangle': ['error', { allow: ['_id', '__v'] }],
    'no-param-reassign': ['error', { props: false }],
    'no-console': 0,
  },
}
