module.exports = {
  root: true,
  extends: ['standard'],
  plugins: ['flowtype'],
  parser: 'babel-eslint',
  env: {
    'node': true,
    'jest': true,
  },
  rules: {
    'comma-dangle': [2, 'only-multiline']
  }
}
