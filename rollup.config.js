import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "lib/index.js",
        format: "cjs"
      },
      {
        file: "lib/index.es.js",
        format: "es",
        exports: "named"
      }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"]
      }),
      peerDepsExternal(),
      resolve(),
      typescript(),
      terser(),
      postcss({
        extensions: [".css"]
      })
    ]
  }
];
