module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react'
  ],
  rules: {
    // Permitir JSX tanto em arquivos .js quanto em .jsx
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // Não inserir ponto e vírgula no fim da sentença
    omitLastInOneLineBlock: 'never'
  },
}
