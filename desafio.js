const place = { 
    X: 0, 
    Y: 0
 }
const directions =  [ 'N', 'E', 'S', 'W' ]

const commands = [ 'L', 'R', 'M', 'P' ] 

const robot1 = {
    position: {
        X: 0,
        Y: 0,
        direction: 'S'
    },
    travel: []
}

const robot2 = {
    position: {
        X: 0,
        Y: 0,
        direction: ''
    },
    travel: []
}

function changeDirection(command, robot) {

    if(command === 'L' || command === 'R') {
        const directionValue = command === 'L' ? -1 : 1
        robot.position.direction = directions[(directions.indexOf(robot.position.direction) + directionValue) % directions.length]
        console.log(robot.position.direction)
        return robot.position.direction
    } else {
        return console.log('Invalid command.')
    } 
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const question1 = () => {
    return new Promise((resolve, reject) => {
      rl.question('Lugar > ', (data) => {
        let position = []
        data.toString().split(/[\s\n]/,2).forEach(coord => {
        position.push(parseInt(coord))
        place.X = position[0]
        place.Y = position[1]
        })
        console.log(place)
        resolve()
      })
    })
}
  
const question2 = () => {
    return new Promise((resolve, reject) => {
      rl.question('Posição robo 1 > ', (data) => {
        let position = []
        data.toString().split(/[\s\n]/,3).forEach(coord => {
        position.push(coord.toUpperCase())
        robot1.position.X = parseInt(position[0])
        robot1.position.Y = parseInt(position[1])
        robot1.position.direction = position[2]
        })
        console.log(robot1)
        resolve()
      })
    })
}

const question3 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Movimento do robo > ' , (data) => {
            Array.from(data).forEach(commands => {
            robot1.travel.push(commands.toUpperCase())
            })
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