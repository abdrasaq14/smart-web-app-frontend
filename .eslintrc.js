module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows parsing modern ECMAScript features
    sourceType: 'module', // Allows the use of imports
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended', // Use the recommended rules from ESLint
    'plugin:react/recommended', // Use the recommended rules from eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Use the recommended rules from @typescript-eslint/eslint-plugin
  ],
  rules: {
    // Customize your rules here
    'react/prop-types': 'off', // Disable prop-types as TypeScript handles them
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit return types for functions
    '@typescript-eslint/no-explicit-any': 'warn', // Warn on using any type
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
