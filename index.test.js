
const Robot = require('./Robot.js')

test('go to 13N', () => {
  const robot1 = new Robot(1, 2, 'N')

  const commands = ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']
  robot1.travel = commands
  robot1.filterCommands()

  expect(robot1.position.X).toBe(1)
  expect(robot1.position.Y).toBe(3)
  expect(robot1.position.direction).toBe('N')
})

test('go to 51E', () => {
  const robot1 = new Robot(3, 3, 'E')

  const commands = ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']
  robot1.travel = commands
  robot1.filterCommands()

  expect(robot1.position.X).toBe(5)
  expect(robot1.position.Y).toBe(1)
  expect(robot1.position.direction).toBe('E')
})

test('take photo', () => {
  const robot1 = new Robot(1, 2, 'N')

  const commands = ['M', 'M', 'M', 'P', 'L', 'M', 'M', 'L', 'P', 'P', 'M', 'M', 'R', 'P', 'M', 'M']
  robot1.travel = commands
  robot1.filterCommands()
  console.log(robot1.photo)
})
