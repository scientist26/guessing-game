class GuessingGame {
    constructor() {
      this.min = 0;
      this.max = 0;
      this.desired = 0;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      return this.desired = Math.ceil((this.max - this.min) / 2 + this.min)
    }

    lower() {
      this.max = this.desired
    }

    greater() {
      this.min = this.desired
    }
}

module.exports = GuessingGame;
