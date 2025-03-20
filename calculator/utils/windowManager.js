class WindowManager {
  constructor(windowSize) {
    this.windowSize = windowSize;
    this.numbers = [];
  }

  addNumbers(newNumbers) {
    const uniqueNumbers = [...new Set([...this.numbers, ...newNumbers])];
    this.numbers = uniqueNumbers;

    if (this.numbers.length > this.windowSize) {
      this.numbers = this.numbers.slice(this.numbers.length - this.windowSize);
    }

    return this.numbers;
  }

  getNumbers() {
    return this.numbers;
  }

  getAverage() {
    if (this.numbers.length === 0) return 0;
    const sum = this.numbers.reduce((acc, num) => acc + num, 0);
    return parseFloat((sum / this.numbers.length).toFixed(2));
  }
}

module.exports = WindowManager;
