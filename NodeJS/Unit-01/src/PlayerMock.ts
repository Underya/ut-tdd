import { Chip } from './Chip'
import { Player } from './Player'

export class PlayerMock extends Player {
  public winWasCalled: boolean = false
  public winChips: Chip = new Chip(0)
  win(chips: Chip) {
    // this._availableChips = this._availableChips.add(chips)
    this.winWasCalled = true
    this.winChips = chips
  }
}
