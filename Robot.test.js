
const Robot = require('./Robot.js')

test('go to 13N', () => {
  const robot1 = new Robot(1, 2, 'N')
  const gridSize = { X: 5, Y: 5 }
  const commands = ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']

  robot1.commands = commands
  robot1.doCommands(gridSize)

  expect(robot1.position.X).toBe(1)
  expect(robot1.position.Y).toBe(3)
  expect(robot1.position.direction).toBe('N')
})

test('go to 51E', () => {
  const gridSize = { X: 5, Y: 5 }
  const robot1 = new Robot(3, 3, 'E')
  const commands = ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']

  robot1.commands = commands
  robot1.doCommands(gridSize)

  expect(robot1.position.X).toBe(5)
  expect(robot1.position.Y).toBe(1)
  expect(robot1.position.direction).toBe('E')
})

test('take photo', () => {
  const gridSize = { X: 5, Y: 5 }
  const robot1 = new Robot(1, 2, 'N')
  const commands = ['M', 'M', 'M', 'P', 'L', 'M', 'M', 'L', 'P', 'P', 'M', 'M', 'R', 'P', 'M', 'M']

  robot1.commands = commands
  robot1.doCommands(gridSize)

  console.log(robot1.photo)
})
