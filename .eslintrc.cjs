/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  globals: {
    NodeJS: true,
    NodeListOf: true,
  },
  env: {
    es2022: true,
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended", "next", "eslint-config-prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["unused-imports", "@typescript-eslint"],
  rules: {
    "unused-imports/no-unused-imports": "warn",
    "eol-last": "off",
    "jsx-quotes": ["warn", "prefer-double"],
    quotes: ["warn", "double"],
    semi: ["warn", "never"],
    "@typescript-eslint/no-explicit-any": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      rules: {
        "@next/next/no-img-element": "off",
        "@typescript-eslint/no-unsafe-assignment": "off"

      },
    },
  ],
}
