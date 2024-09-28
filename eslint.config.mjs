import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      globals: globals.browser,
      node: true,
    },
  },
  prettier,
  pluginJs.configs.recommended,
  ...ts.configs.recommended,
];
