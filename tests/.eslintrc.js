module.exports = {
    env: {
        node: true,
        jest: true,
    },
    parserOptions: {
      ecmaVersion: 7,
    },
    globals: {
      page: true,
      browser: true,
      context: true,
      jestPuppeteer: true,
    },
    extends: "eslint:recommended",
    rules: {
        "semi": ["error", "always"],
        "indent": ["error", 2, {"SwitchCase": 1}],
        "no-useless-escape": "off"
    }
};
