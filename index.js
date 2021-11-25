const fs = require('fs')
const plugin = require('windicss/plugin');
const generator = require('./src/generator')

module.exports = plugin.withOptions(({ path = 'safelist.txt', patterns = [] }) => ({ theme }) =>
    fs.writeFileSync(path, JSON.stringify(generator(theme)(patterns))))
