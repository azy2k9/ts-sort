class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHandSide = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHandSide;
        }
      }
    }
  }
}

const sorter = new Sorter([3, 0, 10, -5, 55]);
sorter.sort();
console.log(sorter.collection);
