const { place } = require('./constants.js')

function updatePosition(position) {
    const { direction } = position 
    let newPosition = {...position}
    
    if (direction === 'N') {
        newPosition.Y++
    } else if (direction === 'S') {
        newPosition.Y--
    } else if (direction === 'E') {
        newPosition.X++
    } else if (direction === 'W') {
        newPosition.X--
    }

    if (newPosition.X < 0 || newPosition.X > place.X || newPosition.Y < 0 || newPosition.Y > place.Y) {
        return position
    } else {
        return newPosition
    }
}

module.exports = updatePosition
