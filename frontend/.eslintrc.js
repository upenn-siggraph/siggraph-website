module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['unused-imports'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    '@next/next/no-img-element': 0,

    'unused-imports/no-unused-imports': 'error',
  },
}
