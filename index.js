const readline = require('readline')
const validateInput = require('./src/validateInput.js')

const input = []

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('Entrada de comandos:\n')
rl.prompt()

rl.on('line', function (command) {
  if (command === '') {
    rl.close()
  }
  input.push(command)
})

rl.on('close', async function () {
  try {
    const output = await validateInput(input)
    console.log(output)
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(0)
  }
})
