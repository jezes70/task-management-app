import type { Config } from "jest";

const config: Config = {
  verbose: true,
};

module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};

export default config;
