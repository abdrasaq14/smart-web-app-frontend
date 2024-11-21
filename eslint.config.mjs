import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  // Base JavaScript configuration
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      js: js,
    },
    rules: js.configs.recommended.rules,
  },

  // TypeScript configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: tsPlugin.configs.recommended.rules,
  },

  // React-specific configuration (for React 17+)
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      react: react,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the version of React
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Disable the rule for React 17+
      ...react.configs.recommended.rules,
    },
  },

  // Custom rules
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
       'react/react-in-jsx-scope': 'off',
    },
  },
];
