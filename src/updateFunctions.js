function updatePosition (position, gridSize) {
  const { direction } = position
  const newPosition = { ...position }

  if (direction === 'N') {
    newPosition.Y++
  } else if (direction === 'S') {
    newPosition.Y--
  } else if (direction === 'E') {
    newPosition.X++
  } else if (direction === 'W') {
    newPosition.X--
  }

  if (newPosition.X < 0 || newPosition.X > gridSize.X || newPosition.Y < 0 || newPosition.Y > gridSize.Y) {
    return position
  } else {
    return newPosition
  }
}

function updatePhoto (position) {
  const { direction } = position
  const newPhoto = { ...position }

  if (direction === 'N') {
    newPhoto.Y++
  } else if (direction === 'S') {
    newPhoto.Y--
  } else if (direction === 'E') {
    newPhoto.X++
  } else if (direction === 'W') {
    newPhoto.X--
  }

  return newPhoto
}

module.exports = { updatePosition, updatePhoto }
