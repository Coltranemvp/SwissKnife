module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:effector/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'effector'],
  globals: {
    JSX: true,
  },
  rules: {
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'space-before-function-paren': 0,
    'max-len': ['warn', 120, 2, {ignoreUrls: true}],
    'no-console': 'warn',
    'no-alert': 'warn',
    'no-param-reassign': 'error',
    'no-var': 'error',
    radix: 'off',
    'react/require-default-props': 'off',
    'prefer-destructuring': 'off',
    'react/no-find-dom-node': 'error',
    'react/no-unused-prop-types': 'warn',
    'no-empty-function': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': ['warn'],
    '@typescript-eslint/no-unsafe-call': 'off',
    'promise/catch-or-return': 'off',
    'promise/always-return': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
