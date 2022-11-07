const { readGitignoreFiles } = require("eslint-gitignore");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "standard-with-typescript",
    "prettier", // Make sure to put it last. See https://github.com/prettier/eslint-config-prettier#installation
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["autofix"],
  rules: {
    "import/order": ["error", { alphabetize: { order: "asc" } }],
    "autofix/no-unused-vars": "error",
  },
  ignorePatterns: readGitignoreFiles({ cwd: __dirname }),
};
