const Robot = require('./Robot.js')

const place = { 
    X: 5, 
    Y: 5,
 }
const directions =  [ 'N', 'E', 'S', 'W' ]

const commands = [ 'L', 'R', 'M', 'P' ] 

const robots = []

var indexRobot = 0

//const robot1 = new Robot(1, 2, 'N')
//const robot2 = new Robot(0, 0, 'E')

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const question1 = () => {
    return new Promise((resolve, reject) => {
      rl.question('', (data) => {
        const positions = data.toString().split(/[\s\n]/, 2).map(parseInt)
        place.X = positions[0]
        place.Y = positions[1]
        resolve()
      })
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
      rl.question('', (data) => {
        const positions = data.toString().split(/[\s\n]/, 3)
        if(Number.isInteger(parseInt(positions[0]))) {
            robots[indexRobot] = new Robot(parseInt(positions[0]), parseInt(positions[1]), positions[2].toUpperCase())
            question3()
        } else {
            console.log(robots.map(robot =>
                `${robot.position.X} ${robot.position.Y} ${robot.position.direction}`).join('\n'))
        }
        resolve()
      })
    })
}
    
const question3 = () => {
    return new Promise((resolve, reject) => {
        rl.question('' , (data) => {
            robots[indexRobot].travel = [...robots[indexRobot].travel, ...data.toUpperCase()]
            robots[indexRobot].filterCommands()
            indexRobot++
            question2()
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

