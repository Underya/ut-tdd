//@ts-test
import { expect } from 'chai'
import { Bet } from '../../src/Bet'
import { Chip } from '../../src/Chip'
import { Player } from '../../src/Player'
import { RollDiceGame } from '../../src/RollDiceGame'
import { Dice } from '../../src/Random'

const createOneChip = (value: number) => {
  let chip: Chip = new Chip(value)
  return chip
}

const createPlayerWhoJoinedTheGame = () => {
  let player: Player = new Player()

  let dice: Dice = new Dice()
  let game: RollDiceGame = new RollDiceGame(dice)
  player.join(game)
  return player
}

const createGameWithNPlayers = (value: number) => {
  let dice: Dice = new Dice()
  let game: RollDiceGame = new RollDiceGame(dice)
  for (let index = 0; index < value; index++) {
    const player: Player = new Player()
    player.join(game)
  }
  return game
}
describe('Chips', () => {
  it('Compare two equal chips', () => {
    expect(createOneChip(1).equals(createOneChip(1))).to.equal(true)
  })

  it('Compare two different chips', () => {
    expect(createOneChip(1).equals(createOneChip(2))).to.equal(false)
  })
})

describe('Player', () => {
  it('Can join the game', () => {
    expect(createPlayerWhoJoinedTheGame().isInGame()).to.equal(true)
  })

  it('Can"t join another game', () => {
    const game = createGameWithNPlayers(6)
    const player = createPlayerWhoJoinedTheGame()
    expect(() => {
      player.join(game)
    }).to.throw('Unable to enter another game')
    expect(player.isInGame()).to.equal(true)
  })

  it('seventh player cannot join the game', () => {
    const game = createGameWithNPlayers(6)
    const playerSeven = new Player()
    expect(() => {
      playerSeven.join(game)
    }).to.throw('Game can not accept more than 6 players')
    expect(playerSeven.isInGame()).to.equal(false)
  })
})

// describe('Chips test', () => {
//   let resualtChip = new Chip(2)
//   let chip1 = new Chip(1)
//   let chip2 = new Chip(1)
//   // let chip2 = new Chip(1)
//   it('should add one chip', () => {
//     expect(resualtChip.equals(chip1.add(chip2))).to.equal(true)
//   })
//   it('should multiply by 2', () => {
//     expect(resualtChip.equals(chip1.multiply(2))).to.equal(true)
//   })
//   it('first should grater than second', () => {
//     expect(resualtChip.gt(chip2)).to.equal(true)
//   })
//   it('both should equals', () => {
//     expect(chip1.equals(chip2)).to.equal(true)
//   })
// })

// describe('Player test', () => {
//   it('can join the game', () => {
//     let player = new Player()
//     let diceStub = new DiceStub(5)
//     let game = new RollDiceGame(diceStub)

//     player.join(game)

//     expect(player.isInGame()).to.equal(true)
//   })

//   // it('cannot join two times', () => {
//   //   let player = new Player()
//   //   let game = new RollDiceGame()

//   //   player.join(game)
//   //   player.join(game)

//   //   expect(player.isInGame()).to.equal(false)
//   // })

//   // it('can leave game', () => {
//   //   let player = new Player()
//   //   let game = new RollDiceGame()

//   //   player.leaveGame()

//   //   expect(player.isInGame()).to.equal(false)
//   // })

//   it('seventh player cannot be added to the game', () => {
//     let game = createGameWithSixPlayers()
//     let player = new Player()

//     expect(() => {
//       player.join(game)
//     }).to.throw('Game can not accept more than 6 players')
//     // expect(player.join(game)).to.throw(
//     //   'Game can not accept more than 6 players'
//     // )
//   })

//   function createGameWithSixPlayers() {
//     let diceStub = new DiceStub(5)
//     let game = new RollDiceGame(diceStub)

//     for (let index = 0; index < 6; index++) {
//       let player = new Player()
//       player.join(game)
//     }
//     return game
//   }
// })
// describe('Game test', () => {
//   it('player can win the game', () => {
//     let player = new Player()
//     let chip = new Chip(1)
//     let diceStub = new DiceStub(5)
//     let game = new RollDiceGame(diceStub)
//     player.join(game)
//     player.buy(chip)
//     player.bet(new Bet(chip, 5))

//     game.play()

//     expect(player.has(new Chip(6)))
//   })

//   it('can win 6 chips', () => {
//     let player = new PlayerMock()
//     let chip = new Chip(1)
//     let diceStub = new DiceStub(5)
//     let game = new RollDiceGame(diceStub)
//     player.bet(new Bet(chip, 5))
//     game.addPlayer(player)

//     game.play()

//     expect(player.winWasCalled).to.equal(true)
//     expect(player.winChips.equals(new Chip(6))).to.equal(true)
//   })

//   it('can lose his bet', () => {
//     let player = new PlayerMock()
//     let chip = new Chip(1)
//     let diceStub = new DiceStub(4)
//     let game = new RollDiceGame(diceStub)
//     player.bet(new Bet(chip, 5))
//     game.addPlayer(player)

//     game.play()

//     expect(player.loseWasCalled).to.equal(true)
//   })
// })
