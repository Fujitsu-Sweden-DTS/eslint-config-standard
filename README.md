# eslint-config-standard

## What is it

A shareable ESLint config.

## How to use it

* To install it into your project:
  * Run `npm install --save-dev eslint @fujitsusweden/eslint-config-standard`
  * Run `npx eslint --init`
    * On the question `How would you like to use ESLint?`, answer `To check syntax and find problems`.
    * Answer other questions as appropriate.
  * In your generated `.eslintrc.js` file, change `extends: "eslint:recommended"` to `extends: "@fujitsusweden/standard"`
* To check for problems, run `npx eslint .` (and if you use Vue, add ` --ext .js,.vue`.)
* To check for problems and also let ESLint fix everything it can, run `npx eslint . --fix` (and if you use Vue, add ` --ext .js,.vue`.)

## Development

Run `./script` without arguments for help
