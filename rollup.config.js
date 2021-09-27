import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy-assets";
import json from "rollup-plugin-json";

export default {
  input: "./src/main.js",
  external: [
    "cookies",
    "create-response",
    "http-request",
    "log",
    "streams",
    "text-encode-transform",
    "url-search-params",
  ],
  output: {
    format: "es",
    dir: "dist",
  },
  preserveModules: false,
  plugins: [
    commonjs(),
    resolve(),
    copy({
      assets: ["bundle.json"],
    }),
    json(),
  ],
};
