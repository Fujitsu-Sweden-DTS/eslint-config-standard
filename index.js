"use strict";
const ACCEPTABLE_MAGIC_NUMBERS = [-1, 0, 1, 2, 100];
const COMPLEXITY = 25;
const INDENT_SIZE = 2;
const MAX_LEN = 200;
const MAX_PARAMS = 4;
module.exports = {
  extends: "eslint:recommended",
  rules: {
    "accessor-pairs": "error",
    "array-bracket-newline": "error",
    "array-bracket-spacing": ["error", "never"],
    "array-callback-return": "error",
    "array-element-newline": ["error", "consistent"],
    "arrow-body-style": "error",
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", { after: true, before: true }],
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": ["error", "1tbs"],
    camelcase: "off",
    "capitalized-comments": "off",
    "class-methods-use-this": "error",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "error",
    "comma-style": ["error", "last"],
    complexity: ["error", COMPLEXITY],
    "computed-property-spacing": ["error", "never"],
    "consistent-return": "error",
    "consistent-this": "error",
    "constructor-super": "error",
    curly: "error",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eol-last": "error",
    eqeqeq: "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "func-names": "off",
    "func-style": "off",
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "multiline-arguments"],
    "generator-star-spacing": ["error", { before: false, after: true }],
    "grouped-accessor-pairs": "error",
    "guard-for-in": "off",
    "id-denylist": "error",
    "id-length": "off",
    "id-match": "error",
    "implicit-arrow-linebreak": "off",
    indent: ["error", INDENT_SIZE, { SwitchCase: 1 }],
    "init-declarations": "error",
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": ["error", { after: true, before: true }],
    "line-comment-position": "off",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "error",
    "lines-between-class-members": ["error", "always"],
    "max-classes-per-file": "error",
    "max-depth": "off",
    "max-len": ["warn", { code: MAX_LEN, ignoreStrings: true }],
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "error",
    "max-params": ["error", MAX_PARAMS],
    "max-statements": "off",
    "max-statements-per-line": "error",
    "multiline-comment-style": ["error", "separate-lines"],
    "new-cap": "error",
    "new-parens": "error",
    "newline-per-chained-call": "off", // It would've been good to enforce consistency; newlines for all or none, but no such option exists.
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "warn",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-confusing-arrow": ["error", { allowParens: true }],
    "no-console": "error",
    "no-constructor-return": "error",
    "no-continue": "off",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "off",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": [
      "error", "all", {
        enforceForArrowConditionals: false,
        enforceForFunctionPrototypeMethods: false,
        enforceForNewInMemberExpressions: false,
        ignoreJSX: "all",
        nestedBinaryExpressions: false,
      },
    ],
    "no-floating-decimal": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-loss-of-precision": "error",
    "no-magic-numbers": ["error", { ignore: ACCEPTABLE_MAGIC_NUMBERS, ignoreArrayIndexes: true }],
    "no-mixed-operators": "off",
    "no-multi-assign": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "off",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-promise-executor-return": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-restricted-exports": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-restricted-properties": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-ternary": "off",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "off",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": [
      "error",
      { varsIgnorePattern: "^ignored__", argsIgnorePattern: "^ignored__" },
    ],
    "no-use-before-define": "error",
    "no-useless-backreference": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": ["warn", { terms: ["fixme", "todo"] }],
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": ["error", { multiline: true }],
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    "object-shorthand": "error",
    "one-var": "off",
    "one-var-declaration-per-line": "error",
    "operator-assignment": ["error", "always"],
    "operator-linebreak": "error",
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "off",
    "prefer-exponentiation-operator": "error",
    "prefer-named-capture-group": "off",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "as-needed", { numbers: true }],
    quotes: ["error", "double", { avoidEscape: true }],
    radix: ["error", "as-needed"],
    "require-atomic-updates": "error",
    "require-await": "error",
    "require-unicode-regexp": "error",
    "rest-spread-spacing": ["error", "never"],
    semi: "error",
    "semi-spacing": ["error", { after: true, before: false }],
    "semi-style": ["error", "last"],
    "sort-imports": "error",
    "sort-keys": "off",
    "sort-vars": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always"],
    strict: "error",
    "switch-colon-spacing": ["error", { after: true, before: false }],
    "symbol-description": "error",
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": "error",
    "unicode-bom": ["error", "never"],
    "vars-on-top": "off", // Redundant since we use "no-var".
    "wrap-iife": "error",
    "wrap-regex": "error",
    "yield-star-spacing": "error",
  },
};
