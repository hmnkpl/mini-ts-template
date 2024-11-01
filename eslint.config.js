import eslint from '@eslint/js';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintPrettier from 'eslint-config-prettier';
import eslintTs from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['**/*.ts'],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-implicit-coercion': 'error',
      'prefer-template': 'error',
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
      parserOptions: {
        project: true,
        sourceType: 'module',
      },
    },
    plugins: { typescriptEslintPlugin },
  },
  eslint.configs.recommended,
  eslintPrettier,
  ...eslintTs.configs.strict,
  ...eslintTs.configs.stylistic,
];
