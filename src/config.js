const arguments = process.argv.splice(2)

module.exports = {
  input: arguments[0] || './pages.json',
  output: arguments[1] || './router/pages.json'
}