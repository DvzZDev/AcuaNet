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
  extends: ["eslint-config-prettier", "eslint:recommended", "next"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "warn", // La regla debe estar definida aquí
    "eol-last": "off",
    "jsx-quotes": ["warn", "prefer-double"],
    quotes: ["warn", "double"],
    semi: ["warn", "never"],
    // Más reglas...
  },
  settings: {
    react: {
      version: "detect", // Esto detectará automáticamente la versión de React instalada
    },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": "off", // Desactiva la regla aquí
      },
    },
  ],
}
