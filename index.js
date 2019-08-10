module.exports = {
  extends: [
    'eslint:recommended',
    'eslint-config-google',
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'indent': ['error', 2, { SwitchCase: 2 }],
    'no-console': 'off',
    'object-curly-spacing': ['error', 'always'],
    'space-infix-ops': ['error', { int32Hint: true }],
    'max-len': ['error', 120],
    'eqeqeq': ['error', 'always']
  }
};
