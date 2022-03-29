import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const typescriptPlugin = typescript({
  tsconfig: './tsconfig.json'
});
const dtsPlugin = dts();

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/use-request.umd.js',
        name: 'useRequest',
        format: 'umd',
        globals: {
          'react': 'React',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
      {
        file: 'dist/use-request.esm.js',
        format: 'es',
        globals: {
          'react': 'React',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    ],
    plugins: [
      typescriptPlugin,
    ],
    external: ['react', 'react/jsx-runtime'],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/use-request.d.ts',
        format: 'es',
      },
    ],
    plugins: [
      dtsPlugin,
    ],
  },
];

export default config;
