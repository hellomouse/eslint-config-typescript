module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'eslint-config-google',
    'plugin:@typescript-eslint/recommended'
  ],
  // eslint-plugin-jsdoc does not support typescript-style jsdoc
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    // Override @typescript-eslint/recommended rules with updated Google rules for TS
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],

    // any exists for a reason
    '@typescript-eslint/no-explicit-any': 'off',

    // this rule only makes it more complicated to do @ts-ignore:
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    '@typescript-eslint/ban-ts-ignore': 'off',

    // this rule does not understand jsdoc in typescript
    'valid-jsdoc': 'off',

    // highly subjective: dangling commas feel weird,
    'comma-dangle': ['error', 'never'],

    // so you can do n => +n instead of (n) => +n
    'arrow-parens': ['error', 'as-needed'],

    // 2 spaces for indent
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],

    // disable eslint/indent which doesn't work for typescript
    'indent': 'off',

    // console.log() is often used in node.js
    'no-console': 'off',

    // spaces after curly brackets look cleaner ({a: 4} vs { a: 4 })
    // also done by util.inspect
    'object-curly-spacing': ['error', 'always'],

    // a + b rather than a+b, but allow integer hints to not have spaces (eg. b|0)
    'space-infix-ops': ['error', { int32Hint: true }],

    // lines should generally be kept short but definitely shouldn't be over 120 characters
    // allow long strings and regexes though
    'max-len': ['error', {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],

    // == has weird behavior with types, always use === instead
    'eqeqeq': ['error', 'always'],

    // errors due to unintentional reassigning generally are quite rare, in addition,
    // changing from const to let is a bit annoying
    'prefer-const': 'off',

    // use jsdoc/require-jsdoc instead
    'require-jsdoc': 'off',

    // allow while (true)
    'no-constant-condition': ['error', { checkLoops: false }]
  }
};
