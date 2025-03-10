import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import svgr from '@svgr/rollup'

export default {
  input: ['src/assets/_js/head.js', 'src/assets/_js/main.js'],
  output: {
    dir: 'src',
    entryFileNames: 'js/[name].js',
    sourcemap: true
  },
  treeshake: true, // Enable tree shaking for dead code elimination
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),
    nodeResolve(),
    terser(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'],
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    svgr(),
    commonjs()
  ]
}