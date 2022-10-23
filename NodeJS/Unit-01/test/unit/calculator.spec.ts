import { expect } from 'chai'
import { Calculator } from './Calculator'

describe('Calculator should give result', () => {
  it('of 0 for given ""', () => {
    const calculator = new Calculator()
    const sum = calculator.add('')
    expect(sum).to.equal(0)
  })
  it('of 0 for given "0"', () => {
    const calculator = new Calculator()
    const sum = calculator.add('0')
    expect(sum).to.equal(0)
  })
  it('of 1 for given "1"', () => {
    const calculator = new Calculator()
    const sum = calculator.add('1')
    expect(sum).to.equal(1)
  })
  it('of 3 for given "1,2"', () => {
    const calculator = new Calculator()
    const sum = calculator.add('1,2')
    expect(sum).to.equal(3)
  })
  it('of 10 for given "1,2,2,2,3"', () => {
    const calculator = new Calculator()
    const sum = calculator.add('1,2,2,2,3')
    expect(sum).to.equal(10)
  })
  it('of 6 for given "1\n2,3"', () => {
    const calculator = new Calculator()
    const sum = calculator.add('1\n2,3')
    expect(sum).to.equal(16)
  })
})
