const place = { 
    X: 5, 
    Y: 5,
 }
const directions =  [ 'N', 'E', 'S', 'W' ]

const commands = [ 'L', 'R', 'M', 'P' ] 

const robot1 = {
    position: {
        X: 1,
        Y: 2,
        direction: 'N',
    },
    travel: [],
}

const robot2 = {
    position: {
        X: 0,
        Y: 0,
        direction: '',
    },
    travel: [],
}

function changeDirection(command, robot) {
    if(command === 'L' || command === 'R') {
        const directionValue = command === 'L' ? -1 : 1
        const sumDirection = directions.indexOf(robot.position.direction) + directionValue
        robot.position.direction = directions.at(sumDirection % directions.length)
        console.log(`[${robot.position.X}][${robot.position.Y}]-[${robot.position.direction}] --> direction`)
        return robot.position.direction
    } else {
        return console.log('Invalid command.')
    } 
}

function move(command, robot) {
    const { position } = robot
    if(command === 'M') {
        robot.position = updatePosition(position)
        console.log(`[${robot.position.X}][${robot.position.Y}]-[${robot.position.direction}] --> move`)
        return position
    } else {
        return console.log('Invalid command.')
    }
}

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

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const question1 = () => {
    return new Promise((resolve, reject) => {
      rl.question('Lugar > ', (data) => {
        /*let position = []
        data.toString().split(/[\s\n]/,2).forEach(coord => {
            position.push(parseInt(coord))
            place.X = position[0]
            place.Y = position[1]
        })*/

        const positions = data.toString().split(/[\s\n]/, 2).map(parseInt)
        place.X = positions[0]
        place.Y = positions[1]
        resolve()
      })
    })
}
  
const question2 = () => {
    return new Promise((resolve, reject) => {
      rl.question('Posição robo 1 > ', (data) => {
        /*let position = []
        data.toString().split(/[\s\n]/,3).forEach(coord => {
            position.push(coord.toUpperCase())
            robot1.position.X = parseInt(position[0])
            robot1.position.Y = parseInt(position[1])
            robot1.position.direction = position[2]
        })*/

        const positions = data.toString().split(/[\s\n]/, 3)
        robot1.position.X = parseInt(positions[0])
        robot1.position.Y = parseInt(positions[1])
        robot1.position.direction = positions[2].toUpperCase()
        console.log(robot1)
        resolve()
      })
    })
}

const question3 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Movimento do robo > ' , (data) => {
            /*Array.from(data).forEach(commands => {
            robot1.travel.push(commands.toUpperCase())
            })*/

            robot1.travel = [...robot1.travel, ...data.toUpperCase()]
            console.log(robot1)
            resolve()
        })
    })
}
  
const main = async () => {
    await question1()
    await question2()
    await question3()
    rl.close()
}

main()


module.exports = { changeDirection, move }