import { Player } from './Player'
import { TooManyPlayersError } from './TooManyPlayersError'
import { Dice } from './Random'

export class RollDiceGame {
  private _players: Player[] = []
  private _dice: Dice
  constructor(dice: Dice) {
    this._dice = dice
  }
  addPlayer(player: Player) {
    if (this._players.length == 6) {
      throw new TooManyPlayersError()
    }
    this._players.push(player)
  }

  removePlayer(player: Player) {
    this._players = this._players.filter((p) => p !== player)
  }

  play() {
    let winningScore = this._dice.roll()
    this._players.forEach((player) => {
      var bet = player.getBet()
      if (!bet) return

      if (bet.score === winningScore) {
        player.win(bet.chips.multiply(6))
      } else {
        player.lose(bet.chips)
      }
    })
  }
}
