class LiveTest {
  constructor() {
    LiveTest.prototype.count++;
    console.log('Hello ' + this.count);
    this.index = 0;
  }

  index() {
    console.log('indexing and stuff...');
  }

  gen() {
    console.log(++this.index);
  }
}

LiveTest.prototype.count = 0;

const a = new LiveTest();
const b = new LiveTest();

console.log(a.count === b.count);
