{
  module.exports = {
    trailingComma: 'es5',
    indent_style: 'space',
    indent_size: 2,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    printWidth: 60,
    arrowParens: 'avoid',
    plugins: [require('prettier-plugin-tailwindcss')],
  }
}
