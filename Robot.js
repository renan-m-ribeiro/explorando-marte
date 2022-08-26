const updatePosition = require('./updatePosition.js')
const { directions } = require('./constants.js')

class Robot {
    constructor(position, travel) {
        this.position = position
        this.travel = travel
    }

    filterCommands() {
        this.travel.forEach(command => {
            if(command === 'L' || command === 'R') {
                return this.changeDirection(command)
            } else if (command === 'M') {
                return this.move(command)
            } else if (command === 'P') {
                return this.place(command)
            } else {
                return console.log('Invalid command.')
            }
        })
    }

    changeDirection(command) {
        const directionValue = command === 'L' ? -1 : 1
        const sumDirection = directions.indexOf(this.position.direction) + directionValue
        this.position.direction = directions.at(sumDirection % directions.length)
        console.log(`[${this.position.X}][${this.position.Y}]-[${this.position.direction}] --> direction`)
        return this.position
    }

    move() {
        const { position } = this
        this.position = updatePosition(position)
        console.log(`[${this.position.X}][${this.position.Y}]-[${this.position.direction}] --> move`)
        return this.position
    }
}

module.exports = Robot
