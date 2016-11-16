const IncrementorProto = {
  inc() {
    console.log(++this.index);
  }
}

const incrementor = Object.create(IncrementorProto);
incrementor.index = 0;

incrementor.inc();
incrementor.inc();
