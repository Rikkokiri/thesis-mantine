module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['dist', 'cypress.config.ts', 'cypress/**/*'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/quotes': ['error', 'double'],
  },
};
