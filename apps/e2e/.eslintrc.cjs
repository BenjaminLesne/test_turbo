/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["@repo/eslint-config/base.cjs", "plugin:playwright/recommended"],
  rules: {
    "playwright/no-skipped-test": [
      "error",
      {
        allowConditional: true,
      },
    ],

    "playwright/expect-expect": [
      "error",
      {
        assertFunctionNames: ["testScreenshot"],
      },
    ],
  },
};

// eslint-disable-next-line no-undef
module.exports = config;
