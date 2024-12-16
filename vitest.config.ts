import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['src/**/*.spec.{ts,js}'],
    exclude: ['node_modules/**/*.{ts,js}', 'dist/**/*.{ts,js}', '**/*.config.{ts,js}', '**/*.d.ts'],
  },
});
