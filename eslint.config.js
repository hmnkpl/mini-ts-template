import eslint from '@eslint/js';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';
import eslintTs from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  eslint.configs.recommended,
  eslintPrettier,
  ...eslintTs.configs.strict,
  ...eslintTs.configs.stylistic,
  {
    files: ['**/*.ts'],
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'error',
      'no-implicit-coercion': 'error',
      'prefer-template': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/restrict-plus-operands': ['error'],
      '@typescript-eslint/restrict-template-expressions': ['error'],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        { allowString: false, allowNumber: false, allowNullableObject: false },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': ['error'],
    },
    languageOptions: {
      parser: typescriptEslintParser,
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: { jestPlugin, typescriptEslintPlugin },
  },
  {
    languageOptions: {
      parserOptions: {
        // Eslint doesn't supply ecmaVersion in `parser.js` `context.parserOptions`
        // This is required to avoid ecmaVersion < 2015 error or 'import' / 'export' error
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { import: importPlugin },
    settings: {
      // This will do the trick
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {},
      },
    },
    rules: {
      ...importPlugin.configs['recommended'].rules,
      ...importPlugin.configs['typescript'].rules,
    },
  },
];
