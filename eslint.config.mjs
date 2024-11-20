import pkg from 'eslint';
const { defineConfig } = pkg;
import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';

/** @type {import('eslint').Linter.Config} */
export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser', 
      ecmaVersion: 2020, 
      sourceType: 'module', 
      globals: globals.browser, 
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tseslint,
    },
    extends: [
      pluginJs.configs.recommended,
      pluginReact.configs.recommended,
      tseslint.configs.recommended,
    ],
    rules: {
      'no-unused-vars': 'warn', // Example rule
    },
  },
]);
