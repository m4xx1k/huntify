// @ts-check
import eslintNestConfig from '@repo/eslint-config/nest-js';

export default [
  { ignores: ['eslint.config.mjs', 'prettier.config.mjs'] },
  ...eslintNestConfig,
];
