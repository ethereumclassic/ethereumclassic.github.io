module.exports = {
  plugins: ['prettier'],
  extends: ['airbnb', 'prettier'],
  settings: {
    'import/extensions': [
      '.js'
    ],
    'import/resolver': {
      alias: [
        ['~components', './src/components']
      ]
    }
  },
  rules: {
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100
      }
    ]
  }
}