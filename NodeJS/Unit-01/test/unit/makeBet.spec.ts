//@ts-test
import { expect } from 'chai'
import { Chip } from '../../src/Chip'

describe('test', () => {
  let chip = new Chip(1)
  let chip1 = new Chip(1)
  // let chip2 = new Chip(1)
  it('will make bet', () => {
    expect(chip1.equals(chip)).to.equal(true)
  })
})

describe('Chips test', () => {
  let resualtChip = new Chip(2)
  let chip1 = new Chip(1)
  let chip2 = new Chip(1)
  // let chip2 = new Chip(1)
  it('should add one chip', () => {
    expect(resualtChip.equals(chip1.add(chip2))).to.equal(true)
  })
  it('should multiply by 2', () => {
    expect(resualtChip.equals(chip1.multiply(2))).to.equal(true)
  })
  it('first should grater than second', () => {
    expect(resualtChip.gt(chip2)).to.equal(true)
  })
  it('both should equals', () => {
    expect(chip1.equals(chip2)).to.equal(true)
  })
})
