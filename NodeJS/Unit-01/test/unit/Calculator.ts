export class Calculator {
  add(numbers: string): number {
    if (numbers.includes('\n')) {
      let other = numbers
      numbers = other.replace('\n', ',')
    }
    let result = 0

    for (const i of numbers.split(',')) {
      result += this.getNumberFromString(i)
    }

    return result
  }
  getNumberFromString(number: string): number {
    if (number === '') return 0
    return parseInt(number)
  }
}
