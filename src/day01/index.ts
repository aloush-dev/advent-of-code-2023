import run from "aocrunner"
import { formatData } from "../utils/index.js"

const parseInput = (rawInput: string) => rawInput

const part1 = async (rawInput?: string) => {
  const data = await formatData(
    "/home/aloush/Code/advent-of-code/aoc2023/src/day01/input.txt",
  )
  let answer = 0
  data.forEach((element) => {
    let firstNum = element.match(/\d/)
    let lastNum = element.match(/\d(?=[^\d]*$)/)
    const total = +(firstNum[0] + lastNum[0])
    answer += total
  })
  return answer
}

const part2 = async (rawInput: string) => {
  const data = await formatData(
    "/home/aloush/Code/advent-of-code/aoc2023/src/day01/input.txt",
  )

  let answer = 0
  data.forEach((element) => {
    let firstNum = element.match(
      /\d|one|two|three|four|five|six|seven|eight|nine/,
    )
    let firstNumAsNum = 0
    let lastNum = element.match(/\d(?=[^\d]*$)/)
    let lastNumAsNum = 0
    if (firstNum[0] === "one") {
      firstNumAsNum = 1
    } else if (firstNum[0] === "two") {
      firstNumAsNum = 2
      } else if (firstNum[0] === "three") {
        firstNumAsNum = 3
      } else if (firstNum[0] === "four") {
        firstNumAsNum = 4
      } else if (firstNum[0] === "five") {
        firstNumAsNum = 5
      } else if (firstNum[0] === "six") {
        firstNumAsNum = 6
      } else if (firstNum[0] === "seven") {
        firstNumAsNum = 7
      } else if (firstNum[0] === "eight") {
        firstNumAsNum = 8
      } else if (firstNum[0] === "nine") {
        firstNumAsNum = 9
      } else {
        firstNumAsNum = +firstNum[0]
      }
      
      if (lastNum[0] === "one") {
        firstNumAsNum = 1
      } else if (lastNum[0] === "two") {
        lastNumAsNum = 2
      } else if (lastNum[0] === "three") {
        lastNumAsNum = 3
      } else if (lastNum[0] === "four") {
        lastNumAsNum = 4
      } else if (lastNum[0] === "five") {
        lastNumAsNum = 5
      } else if (lastNum[0] === "six") {
        lastNumAsNum = 6
      } else if (lastNum[0] === "seven") {
        lastNumAsNum = 7
      } else if (lastNum[0] === "eight") {
        lastNumAsNum = 8
      } else if (lastNum[0] === "nine") {
        lastNumAsNum = 9
      } else {
        lastNumAsNum = +lastNum[0]
      }
      
      
      console.log(firstNumAsNum, lastNumAsNum)
      const total = firstNumAsNum + lastNumAsNum
      answer += total
    })
  return answer
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
