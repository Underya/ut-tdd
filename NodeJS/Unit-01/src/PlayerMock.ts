import { Chip } from './Chip'
import { Player } from './Player'

export class PlayerMock extends Player {
  public winWasCalled: boolean = false
  public loseWasCalled: boolean = false
  public winChips: Chip = new Chip(0)
  win(chips: Chip) {
    this.winWasCalled = true
    this.winChips = chips
  }

  lose(chips: Chip) {
    this.loseWasCalled = true
  }
}
