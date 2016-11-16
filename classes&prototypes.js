class LiveTest {
  constructor() {
    this.index = 0;
  }

  index() {
    console.log('indexing and stuff...');
  }

  gen() {
    console.log(++this.index);
  }
}

const a = new LiveTest();

a.index();
