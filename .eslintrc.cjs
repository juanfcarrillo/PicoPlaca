module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    './node_modules/ts-standard/eslintrc.json',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json', tsconfigRootDir: __dirname },
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  },
  root: true,
}
