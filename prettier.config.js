{
  module.exports = {
    trailingComma: 'none',
    indent_style: 'space',
    indent_size: 2,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    printWidth: 60,
    arrowParens: 'avoid',
    plugins: [require('prettier-plugin-tailwindcss')],
    importOrder: [
      '<THIRD_PARTY_MODULES>',
      '^@/components/(.*)$',
      '^../(.*)$',
      '^./(.*)$',
      '(.scss*)$'
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true
  }
}
