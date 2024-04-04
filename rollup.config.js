import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "sunny-react-package",
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    postcss({
      extract: true,
      minimize: true, // Optional: Minify CSS
      modules: true, // Optional: Enable CSS modules
    }),
  ],
});
