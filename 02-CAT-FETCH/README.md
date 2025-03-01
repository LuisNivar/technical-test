# Technical test for React Juniors and Trainees in Live Coding.

## APIs:

- Facts Random: https://catfact.ninja/fact

- Imagen random: https://cataas.com/cat/says/hello

## Requirements

- [x] Retrieves a random cat fact from the first API.

- [x] Retrieves the three first of the fact.

- [x] Show an image image related at the first three words of the fact.

- [x] Center all content in one column.

- [x] Add refresh button.

- [x] Refactor.

- [x] Minimal test (e2e).

## Install and config ESLint

- npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react -D
- npx eslint --init
- create .eslintrc.json

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["react", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off"
  }
}
```
