const { updatePosition, updatePhoto } = require('./updateFunctions.js')
const { directions } = require('./constants.js')

class Robot {
  constructor (X, Y, direction) {
    this.position = { X, Y, direction }
    this.travel = []
    this.photo = []
  }

  filterCommands (place) {
    this.travel.forEach(command => {
      if (command === 'L' || command === 'R') {
        return this.changeDirection(command)
      } else if (command === 'M') {
        return this.move(command, place)
      } else if (command === 'P') {
        return this.takePhoto(command)
      } else {
        return console.log('Invalid command.')
      }
    })
  }

  changeDirection (command) {
    const directionValue = command === 'L' ? -1 : 1
    const sumDirection = directions.indexOf(this.position.direction) + directionValue
    this.position.direction = directions.at(sumDirection % directions.length)
    // console.log(`[${this.position.X}][${this.position.Y}]-[${this.position.direction}] --> direction`)
    return this.position
  }

  move () {
    const { position } = this
    this.position = updatePosition(position, place)
    // console.log(`[${this.position.X}][${this.position.Y}]-[${this.position.direction}] --> move`)
    return this.position
  }

  takePhoto () {
    const { position } = this
    this.photo = [...this.photo, updatePhoto(position)]
    return this.photo
  }
}

module.exports = Robot
