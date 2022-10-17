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

describe('add chip', () => {
  let chip = new Chip(1)
  let chip1 = new Chip(1)
  let chip2 = new Chip(1)
  // let chip2 = new Chip(1)
  it('should add a chip', () => {
    expect(chip1.add(chip2)).to.equal(1)
  })
})
