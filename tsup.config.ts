import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  splitting: false,
  dts: true,
  sourcemap: true,
  outDir: 'build',
  target: 'node18',
  clean: true,
});
