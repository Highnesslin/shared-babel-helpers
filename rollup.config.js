import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import final from './build/rollup-plugin-extract-babel.js'

const sharedPlugins = [
  babel({
    babelrc: false,
    presets: [['@babel/preset-env', { modules: false }]],
    plugins: [['@babel/plugin-transform-runtime', { useESModules: false }]],
    exclude: 'node_modules/**',
    runtimeHelpers: true
  }),
  resolve({
    // 不解析babel相关的，使用全局依赖
    resolveOnly: module => !module.match(/babel/)
  }),
  commonjs(),
  terser(),
  final()
]

export default [
  {
    input: './src/bundle1.js',
    output: {
      file: 'dist/bundle1.js',
      format: 'iife',
      name: 'Bundle1'
    },
    plugins: [...sharedPlugins]
  },
  {
    input: './src/bundle2.js',
    output: {
      file: 'dist/bundle2.js',
      format: 'iife',
      name: 'Bundle2'
    },
    plugins: [...sharedPlugins]
  }
]
