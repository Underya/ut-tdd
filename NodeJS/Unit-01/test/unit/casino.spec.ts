import { expect } from 'chai'
import { Bet } from '../../src/Bet'
import { Chip } from '../../src/Chip'
import { Player } from '../../src/Player'
import { RollDiceGame } from '../../src/RollDiceGame'
import * as mockito from 'ts-mockito'
import { Dice } from '../../src/Random'

describe('PlayerMock test mockito', () => {
  it('can win 6 chips', () => {
    let playerMock: Player = mockito.mock(Player)
    let player: Player = mockito.instance(playerMock)
    let diceStub: Dice = mockito.mock(Dice)
    let chip = new Chip(1)
    let game = new RollDiceGame(mockito.instance(diceStub))
    mockito.when(playerMock.getBet()).thenReturn(new Bet(chip, 5))
    mockito.when(diceStub.roll()).thenReturn(5)
    game.addPlayer(player)

    game.play()

    mockito.verify(playerMock.win(mockito.anything())).called()
    const winRes = mockito.capture(playerMock.win).first()[0]

    expect(new Chip(6).equals(winRes)).to.equal(true)
  })

  it('can lose his bet', () => {
    let playerMock: Player = mockito.mock(Player)
    let player: Player = mockito.instance(playerMock)
    let diceStub: Dice = mockito.mock(Dice)
    let chip = new Chip(1)
    let game = new RollDiceGame(mockito.instance(diceStub))
    mockito.when(playerMock.getBet()).thenReturn(new Bet(chip, 4))
    mockito.when(diceStub.roll()).thenReturn(5)
    game.addPlayer(player)

    game.play()

    mockito.verify(playerMock.lose(mockito.anything())).called()
    const loseRes = mockito.capture(playerMock.lose).first()[0]

    expect(new Chip(1).equals(loseRes)).to.equal(true)
  })
})
