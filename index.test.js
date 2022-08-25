const { move, changeDirection } = require("./index.js");

test('go to 13N', () => {
    const robot1 = {
        position: {
            X: 1,
            Y: 2,
            direction: 'N',
        },
    }

    changeDirection('L', robot1)
    move('M', robot1)
    changeDirection('L', robot1)
    move('M', robot1)
    changeDirection('L', robot1)
    move('M', robot1)
    changeDirection('L', robot1)
    move('M', robot1)
    move('M', robot1)

    expect(robot1.position.X).toBe(1)
    expect(robot1.position.Y).toBe(3)
    expect(robot1.position.direction).toBe('N')
})
