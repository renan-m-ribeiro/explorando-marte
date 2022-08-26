const Robot = require('./Robot.js')

const place = { 
    X: 5, 
    Y: 5,
 }
const directions =  [ 'N', 'E', 'S', 'W' ]

const commands = [ 'L', 'R', 'M', 'P' ] 

const robot1 = new Robot(1, 2, 'N')
const robot2 = new Robot(0, 0, 'E')

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
        robot1.position.X = parseInt(positions[0])
        robot1.position.Y = parseInt(positions[1])
        robot1.position.direction = positions[2].toUpperCase()
        resolve()
      })
    })
}

const question3 = () => {
    return new Promise((resolve, reject) => {
        rl.question('' , (data) => {
            robot1.travel = [...robot1.travel, ...data.toUpperCase()]
            robot1.filterCommands()
            resolve()
        })
    })
}

const question4 = () => {
    return new Promise((resolve, reject) => {
      rl.question('', (data) => {
        const positions = data.toString().split(/[\s\n]/, 3)
        robot2.position.X = parseInt(positions[0])
        robot2.position.Y = parseInt(positions[1])
        robot2.position.direction = positions[2].toUpperCase()
        resolve()
      })
    })
}

const question5 = () => {
    return new Promise((resolve, reject) => {
        rl.question('' , (data) => {
            robot2.travel = [...robot2.travel, ...data.toUpperCase()]
            robot2.filterCommands()
            resolve()
        })
    })
}

const answer1 = () => {
    return new Promise((resolve, reject) => {
        console.log(`${robot1.position.X} ${robot1.position.Y} ${robot1.position.direction}`)
            resolve()
        })
    }

const answer2 = () => {
    return new Promise((resolve, reject) => {
        console.log(`${robot2.position.X} ${robot2.position.Y} ${robot2.position.direction}`)
            resolve()
        })
    }
  
const main = async () => {
    await question1()
    await question2()
    await question3()
    await question4()
    await question5()
    await answer1()
    await answer2()
    rl.close()
}

main()

