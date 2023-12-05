import run from "aocrunner"

const parseInput = (rawInput: string) => {
  const splitArray = rawInput.split("\n")

  const objectyArray = splitArray.map((game) => {
    let answers = game.split(";")
    answers[0] = answers[0].replace(/.*:/, "")

    const newAnswers = answers.map((data) => {
      const splatData = data.split(",")
      const obj = {}
      splatData.forEach((res) => {
        obj[res.match(/[a-zA-Z]+/)[0]] = +res.match(/\d+/)[0]
      })
      return obj
    })

    const gameObject = {
      gameNo: +game.match(/\d+/)[0],
      grabs: newAnswers,
    }

    return gameObject
  })
  return objectyArray
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)

  const gameRules = { red: 12, blue: 14, green: 13 }

  let total = 0

  input.forEach((gameObj) => {
    let passed = true
    gameObj.grabs.forEach((grab) => {
      if (
        grab.red > gameRules.red ||
        grab.blue > gameRules.blue ||
        grab.green > gameRules.green
      ) {
        passed = false
      }
    })
    if (passed) total += gameObj.gameNo
  })

  return total
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  const gameRules = { red: 12, blue: 14, green: 13 }

  let total = 0

  input.forEach((gameObj) => {

    let red = 0
    let blue = 0
    let green = 0
    gameObj.grabs.forEach((grab) => {
      if(grab.red > red) red = grab.red
      if(grab.blue > blue) blue = grab.blue
      if(grab.green > green) green = grab.green
    })


    total += red * blue * green
  })

  return total
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
