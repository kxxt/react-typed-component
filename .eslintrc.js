module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      classes: true,
      experimentalObjectRestSpread: true,
      // if using react or spread operators
      jsx: true, // if using react or plain jsx
      modules: true,
    },
    sourceType: "module", // can be module or script
  },
  plugins: [
    "react", // if installed eslint-plugin-react
  ],
  rules: {
    // rule overrides go here http://eslint.org/docs/user-guide/configuring#configuring-rules
    indent: [
      2,
      4,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
      },
    ],
    "class-methods-use-this": 0,
    "react/display-name": 0,
    "max-len": [
      "error",
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
