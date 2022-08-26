const { move, changeDirection, filterCommands } = require("./index.js");
const Robot = require("./Robot.js");

test('go to 13N', () => {
    const robot1 = new Robot({ X: 1, Y: 2, direction: 'N'}, [])

    const commands = ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']
    robot1.travel = commands
    robot1.filterCommands()
    //robot1.position = robot1.travel[robot1.travel.length - 1]
    //robot1.travel = robot1.commands.map(filterCommands)
    //robot1.position = robot1.travel[robot1.travel.length - 1]
    //console.log(robot1.changeDirection('L'))
    //console.log(robot1.travel)

    

    expect(robot1.position.X).toBe(1)
    expect(robot1.position.Y).toBe(3)
    expect(robot1.position.direction).toBe('N')
})


/*test('go to 51E', () => {
    const robot2 = {
        position: {
            X: 3,
            Y: 3,
            direction: 'E',
        },
    }

    move('M', robot2)
    move('M', robot2)
    changeDirection('R', robot2)
    move('M', robot2)
    move('M', robot2)
    changeDirection('R', robot2)
    move('M', robot2)
    changeDirection('R', robot2)
    changeDirection('R', robot2)
    move('M', robot2)

    expect(robot2.position.X).toBe(5)
    expect(robot2.position.Y).toBe(1)
    expect(robot2.position.direction).toBe('E')
})
*/