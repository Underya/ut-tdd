//@ts-test
import { expect } from 'chai'
import { Chip } from '../../src/Chip'
import { Player } from '../../src/Player'
import { RollDiceGame } from '../../src/RollDiceGame'

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

describe('Player test', () => {
  it('can join the game', () => {
    let player = new Player()
    let game = new RollDiceGame()

    player.join(game)

    expect(player.isInGame()).to.equal(true)
  })

  // it('cannot join two times', () => {
  //   let player = new Player()
  //   let game = new RollDiceGame()

  //   player.join(game)
  //   player.join(game)

  //   expect(player.isInGame()).to.equal(false)
  // })

  // it('can leave game', () => {
  //   let player = new Player()
  //   let game = new RollDiceGame()

  //   player.leaveGame()

  //   expect(player.isInGame()).to.equal(false)
  // })

  it('seventh player cannot be added to the game', () => {
    let game = createGameWithSixPlayers()
    let player = new Player()

    expect(() => {
      player.join(game)
    }).to.throw('Game can not accept more than 6 players')
    // expect(player.join(game)).to.throw(
    //   'Game can not accept more than 6 players'
    // )
  })

  function createGameWithSixPlayers() {
    let game = new RollDiceGame()

    for (let index = 0; index < 6; index++) {
      let player = new Player()
      player.join(game)
    }
    return game
  }
})
