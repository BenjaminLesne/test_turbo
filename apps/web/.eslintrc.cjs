/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "@repo/eslint-config/base.cjs",
    "plugin:tailwindcss/recommended",
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
