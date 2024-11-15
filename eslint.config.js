import eslintJs from '@eslint/js';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintPrettier from 'eslint-config-prettier';
import importPluginX from 'eslint-plugin-import-x';
import jestPlugin from 'eslint-plugin-jest';
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
    plugins: ['prefer-arrow-functions'],
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'func-style': 'error',
      'import-x/newline-after-import': ['error', { considerComments: true }],
      'import-x/no-cycle': ['error'],
      'import-x/no-dynamic-require': ['warn'],
      'import-x/no-nodejs-modules': ['warn'],
      'import-x/no-useless-path-segments': ['error', { noUselessIndex: true }],
      'no-implicit-coercion': 'error',
      'no-unused-vars': 'off',
      'prefer-arrow-functions/prefer-arrow-functions': [
        'error',
        {
          classPropertiesAllowed: false,
          disallowPrototype: false,
          returnStyle: 'unchanged',
          singleReturnOnly: false,
        },
      ],
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
    plugins: { jest: jestPlugin },
    rules: {
      'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/no-test-return-statement': 'error',
      'jest/prefer-comparison-matcher': 'error',
      'jest/prefer-equality-matcher': ['error'],
      'jest/prefer-expect-assertions': 'off',
      'jest/prefer-to-have-length': 'warn',
      'jest/require-top-level-describe': ['error'],
      'jest/valid-expect': 'error',
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
);
