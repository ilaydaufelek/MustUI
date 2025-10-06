// eslint.config.cjs
module.exports = [
  {
    ignores: ["node_modules", "dist"],

    files: ["src/**/*.{ts,tsx,js,jsx}"],

    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      react: require("eslint-plugin-react"),
    },

    rules: {
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/react-in-jsx-scope": "off",
    },

    settings: {
      react: { version: "detect" },
    },
  },
];
