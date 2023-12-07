module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@next/eslint-plugin-next', 'react', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/no-unused-vars" : "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "@typescript-eslint/prefer-as-const": "off",
    "react/display-name": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
