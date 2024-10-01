/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  plugins: ["@eslint-react/eslint-plugin"],
  extends: [
    "next/core-web-vitals",
    "@repo/eslint-config/base.cjs",
    "plugin:tailwindcss/recommended",
  ],
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      extends: ["plugin:@eslint-react/recommended-type-checked-legacy"],
      rules: {
        "@eslint-react/no-leaked-conditional-rendering": "error",
      },
    },
  ],
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
    tailwindcss: {
      callees: ["classnames", "clsx", "ctl", "cn"],
    },
  },
};
module.exports = config;
