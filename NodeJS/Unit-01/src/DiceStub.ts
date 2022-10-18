export class DiceStub {
  private score: number
  constructor(score: number) {
    this.score = score
  }
  roll() {
    return this.score
  }
}
