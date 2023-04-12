module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": [
      "airbnb",
      "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "@typescript-eslint"
  ],
  "rules": {
      semi: 2,
      'no-unused-vars': [
          1,
          {
              vars: 'all',
              args: 'after-used',
              ignoreRestSiblings: true,
              varsIgnorePattern: '^_',
              argsIgnorePattern: '^_|^err|^ev'
          }
      ],
      'no-useless-escape': 2,
  }
};
