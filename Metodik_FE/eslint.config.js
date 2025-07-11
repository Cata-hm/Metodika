// Metodik_FE/eslint.config.js
// This ESLint configuration file is set up for a TypeScript React project using Vite.
// It extends recommended configurations from ESLint, TypeScript, React Hooks, and React Refresh plugins.
// It also sets up global variables for browser environments and ignores the 'dist' directory.
// The configuration is designed to ensure code quality and consistency across the project.
// The file is structured to be compatible with TypeScript ESLint and includes necessary plugins for React
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
