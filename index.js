const readline = require('readline')
const { directions, commands } = require('./src/constants.js')
const Robot = require('./src/Robot.js')

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
    const output = await validateInput()
    console.log(output)
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(0)
  }
})

function validateInput () {
  return new Promise((resolve, reject) => {
    if (input.length < 3) {
      reject(new Error('Comandos insuficientes.'))
    }

    if (input.length % 2 === 0) {
      reject(new Error('As sondas estão com dados incompletos.'))
    }

    let gridSize = input[0].match(/[\d]+/g)
    if (gridSize.length !== 2 || !Number.isInteger(parseInt(gridSize[0])) || !Number.isInteger(parseInt(gridSize[1]))) {
      reject(new Error('Tamanho da malha inválido.'))
    }
    gridSize = { X: parseInt(gridSize[0]), Y: parseInt(gridSize[1]) }

    const robots = []
    for (let index = 1; index < input.length; index++) {
      const element = input[index]
      const robotIndex = Math.floor((index / 2) - 0.5)

      if (index % 2 === 1) {
        const coords = element.match(/[\d]+/g)
        if (coords.length !== 2 || !Number.isInteger(parseInt(coords[0])) || !Number.isInteger(parseInt(coords[1]))) {
          reject(new Error('Coordenadas inválidas.'))
        }

        if (coords[0] > gridSize.X || coords[1] > gridSize.Y) {
          reject(new Error('Coordenadas inválidas.'))
        }

        const direction = element.match(/[A-Z]/)[0]
        if (!directions.includes(direction)) {
          reject(new Error('Direção inválida.'))
        }

        robots[robotIndex] = new Robot(parseInt(coords[0]), parseInt(coords[1]), direction)
        continue
      }

      const inputCommands = element.split('')
      if (index % 2 === 0 && inputCommands.every(char => commands.includes(char.toUpperCase()))) {
        const robotIndex = Math.floor((index / 2) - 0.5)
        robots[robotIndex].commands = [...robots[robotIndex].commands, ...element.toUpperCase()]
        robots[robotIndex].doCommands(gridSize)
        continue
      } else {
        reject(new Error('Comando inválido.'))
        continue
      }
    }

    const output = robots.map(robot => {
      const { X, Y, direction } = robot.position
      return `${X} ${Y} ${direction}`
    }).join('\n')

    resolve(output)
  })
}
