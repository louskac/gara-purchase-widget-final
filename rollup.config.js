// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import { fileURLToPath } from 'url';
import { dirname, resolve as pathResolve } from 'path';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy'; // Add this import

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
        inlineDynamicImports: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
        inlineDynamicImports: true,
      }
    ],
    plugins: [
      json(),
      peerDepsExternal(),
      alias({
        entries: [
          { find: 'perf_hooks', replacement: pathResolve(__dirname, 'src/mock-node-modules.js') },
          { find: 'crypto', replacement: pathResolve(__dirname, 'src/mock-node-modules.js') },
          { find: 'os', replacement: pathResolve(__dirname, 'src/mock-node-modules.js') },
          { find: 'fs', replacement: pathResolve(__dirname, 'src/mock-node-modules.js') },
          { find: 'stream', replacement: pathResolve(__dirname, 'src/mock-node-modules.js') },
          { find: 'net', replacement: pathResolve(__dirname, 'src/mock-node-modules.js') },
          { find: 'tls', replacement: pathResolve(__dirname, 'src/mock-node-modules.js') },
          { find: 'path', replacement: pathResolve(__dirname, 'src/mock-node-modules.js') },
          { find: 'child_process', replacement: pathResolve(__dirname, 'src/mock-node-modules.js') },
          { find: 'url', replacement: pathResolve(__dirname, 'src/mock-node-modules.js') }
        ]
      }),
      replace({
        preventAssignment: true,
        values: {
          'use client': '',
          'use server': '',
          'process.env.NODE_ENV': JSON.stringify('production'),
          // Direct module imports
          'import net from "net"': 'import { net } from "./src/mock-node-modules.js"',
          'import tls from "tls"': 'import { tls } from "./src/mock-node-modules.js"',
          'import crypto from "crypto"': 'import { crypto } from "./src/mock-node-modules.js"',
          'import * as crypto from "crypto"': 'import { crypto } from "./src/mock-node-modules.js"',
          'import * as stream from "stream"': 'import { stream } from "./src/mock-node-modules.js"',
          'import { performance } from "perf_hooks"': 'import { performance } from "./src/mock-node-modules.js"',
          'import path from "path"': 'import { path } from "./src/mock-node-modules.js"',
          'import * as path from "path"': 'import { path } from "./src/mock-node-modules.js"',
          'import fs from "fs"': 'import { fs } from "./src/mock-node-modules.js"',
          'import * as fs from "fs"': 'import { fs } from "./src/mock-node-modules.js"',
          'import os from "os"': 'import { os } from "./src/mock-node-modules.js"',
          'import * as os from "os"': 'import { os } from "./src/mock-node-modules.js"',
          
          // CommonJS requires
          'require("perf_hooks")': '{"performance": { now: () => Date.now() }}',
          'require("crypto")': 'require("./src/mock-node-modules.js").default',
          'require("path")': 'require("./src/mock-node-modules.js").default',
          'require("fs")': 'require("./src/mock-node-modules.js").default',
          'require("os")': 'require("./src/mock-node-modules.js").default',
          'require("stream")': 'require("./src/mock-node-modules.js").default',
          'require("net")': 'require("./src/mock-node-modules.js").default',
          'require("tls")': 'require("./src/mock-node-modules.js").default',
          
          // Process environment variables
          'process.env': '({NODE_ENV:"production"})'
        }
      }),
      resolve({
        preferBuiltins: false,
        browser: true,
      }),
      commonjs({
        transformMixedEsModules: true,
        requireReturnsDefault: 'auto'
      }),
      typescript({ 
        tsconfig: './tsconfig.json',
        noEmit: false,
        noEmitOnError: false
      }),
      // Add this plugin to copy assets
      copy({
        targets: [
          { src: 'src/assets/*', dest: 'dist/assets' }
        ]
      })
    ],
    external: [
      'react', 
      'react-dom',
      'next',
      'wagmi',
      '@rainbow-me/rainbowkit',
      '@tanstack/react-query',
      'ethers',
      'next-intl',
      'react-hook-form',
      'viem',
      'zod',
      '@hookform/resolvers',
      '@radix-ui/react-slot',
      /^@radix-ui\/.*/
    ],
  },
  // Add a second configuration for declaration files
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [dts()],
    external: [/\.css$/]
  }
];