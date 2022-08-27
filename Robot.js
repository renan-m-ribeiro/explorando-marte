const { updatePosition, updatePhoto } = require('./updateFunctions.js')
const { directions } = require('./constants.js')

class Robot {
  constructor (X, Y, direction) {
    this.position = { X, Y, direction }
    this.commands = []
    this.photo = []
  }

  doCommands (gridSize) {
    this.commands.forEach(command => {
      if (command === 'L' || command === 'R') {
        return this.changeDirection(command)
      } else if (command === 'M') {
        return this.move(gridSize)
      } else if (command === 'P') {
        return this.takePhoto(command)
      }
    })
  }

  changeDirection (command) {
    const directionValue = command === 'L' ? -1 : 1
    const sumDirection = directions.indexOf(this.position.direction) + directionValue
    this.position.direction = directions.at(sumDirection % directions.length)
    return this.position
  }

  move (gridSize) {
    const { position } = this
    this.position = updatePosition(position, gridSize)
    return this.position
  }

  takePhoto () {
    const { position } = this
    this.photo = [...this.photo, updatePhoto(position)]
    return this.photo
  }
}

module.exports = Robot
