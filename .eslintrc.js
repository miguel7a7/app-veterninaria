const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    /* propTypes para desactivarlo */
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'no-tabs': 'error',
    indent: ['error', 2],
  },
}
