module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-unused-vars': ['error', { args: 'none' }],
    'no-async-promise-executor': 'warn',
    'no-useless-catch': 'warn',
    'no-prototype-builtins': 'warn',
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
};
