module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'jsx-a11y', 'unicorn'],
  rules: {
    '@tanstack/query/exhaustive-deps': 'warn',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',

    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    'no-case-declarations': 'off',
    'no-await-in-loop': 'error',
    'no-console': 'off',
    'no-constant-binary-expression': 'off',
    'no-duplicate-imports': 'error',
    'no-duplicate-case': 'error',

    'react/no-unused-prop-types': 'error',
    'react/display-name': 'off',
    'react/no-unknown-property': [
      'error',
      {
        ignore: [
          'position',
          'renderOrder',
          'args',
          'transparent',
          'intensity',
          'rotation',
          'position',
          'visible',
          'scale',
          'wireframe',
          'object',
          'dispose',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-null': 'off',
    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-date-now': 'off',
    'unicorn/switch-case-braces': 'off',
    'unicorn/prefer-string-replace-all': 'off',
    'unicorn/no-empty-file': 'warn',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          db: false,
          arg: false,
          args: false,
          env: false,
          fn: false,
          func: {
            fn: true,
            function: false,
          },
          prop: false,
          props: false,
          ref: false,
          refs: false,
          prev: false,
          err: false,
          acc: false,
          params: false,
        },
        ignore: [
          'semVer',
          'SemVer',
          'floorResName',
          'geofenceResName',
          'accountResName',
          'siteResName',
          'btn',
          'Btn',
        ],
      },
    ],
    'unicorn/no-await-expression-member': 'off',

    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-autofocus': 'warn',
  },
};