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
  extends: ["eslint-config-prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "unused-imports", // Asegúrate de que el plugin esté aquí
  ],
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
      rules: {},
    },
  ],
}
