import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const typescriptPlugin = typescript({
  tsconfig: './tsconfig.json'
});
const dtsPlugin = dts();

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/use-request.umd.js',
      name: 'useRequest',
      format: 'umd',
    },
    {
      file: 'dist/use-request.esm.js',
      format: 'es',
    },
    {
      file: 'dist/use-request.d.ts',
      format: 'es',
    },
  ],
  plugins: [
    typescriptPlugin,
    dtsPlugin,
  ],
};

export default config;
