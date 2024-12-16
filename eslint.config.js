import eslintJs from '@eslint/js';
import typescriptEslintParser from '@typescript-eslint/parser';
import vitest from '@vitest/eslint-plugin';
import eslintPrettier from 'eslint-config-prettier';
import importPluginX from 'eslint-plugin-import-x';
import globals from 'globals';
import eslintTs, { configs as eslintTsConfigs } from 'typescript-eslint';

export default eslintTs.config(
  {
    ignores: ['dist/**', 'build.js'],
  },
  eslintJs.configs.recommended,
  eslintPrettier,
  importPluginX.flatConfigs.recommended,
  importPluginX.flatConfigs.typescript,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
      },
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
        '@typescript-eslint/parser': ['.ts'],
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
      'func-style': 'error',
      'import-x/newline-after-import': ['error', { considerComments: true }],
      'import-x/no-cycle': ['error'],
      'import-x/no-dynamic-require': ['warn'],
      'import-x/no-nodejs-modules': ['warn'],
      'import-x/no-useless-path-segments': ['error', { noUselessIndex: true }],
      'no-implicit-coercion': 'error',
      'no-unused-vars': 'off',
      'prefer-template': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
        },
      ],
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
      '@typescript-eslint/restrict-plus-operands': [
        'error',
        {
          allowBoolean: false,
          allowNullish: false,
          allowNumberAndString: false,
          allowRegExp: false,
          allowAny: false,
          skipCompoundAssignments: true,
        },
      ],
      '@typescript-eslint/restrict-template-expressions': ['error'],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        { allowString: false, allowNumber: false, allowNullableObject: false },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': ['error'],
    },
    extends: [...eslintTsConfigs.strict, ...eslintTsConfigs.stylistic],
  },
  {
    files: ['**/*.spec.ts'],
    plugins: { vitest },
    rules: {
      'vitest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
      'vitest/no-conditional-expect': 'error',
      'vitest/no-conditional-in-test': 'error',
      'vitest/no-conditional-tests': 'error',
      'vitest/no-disabled-tests': 'warn',
      'vitest/no-duplicate-hooks': 'error',
      'vitest/no-focused-tests': ['error', { fixable: false }],
      'vitest/no-identical-title': 'error',
      'vitest/no-test-return-statement': 'error',
      'vitest/prefer-mock-promise-shorthand': 'warn',
      'vitest/prefer-comparison-matcher': 'error',
      'vitest/prefer-equality-matcher': ['error'],
      'vitest/prefer-expect-assertions': 'off',
      'vitest/prefer-to-have-length': 'warn',
      'vitest/require-hook': 'warn',
      'vitest/require-to-throw-message': 'error',
      'vitest/require-top-level-describe': ['error'],
      'vitest/valid-expect': 'error',
    },
  },
);
