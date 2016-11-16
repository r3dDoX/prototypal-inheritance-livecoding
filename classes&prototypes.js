class LiveTest {
  constructor() {
    this.index = 0;
  }

  gen() {
    console.log(++this.index);
  }
}

const a = new LiveTest();
const b = new LiveTest();

a.gen();

a.__proto__.gen = () => {
  console.log('oops');
}
a.gen();
b.gen();
