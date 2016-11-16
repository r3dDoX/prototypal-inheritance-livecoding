const objectCreate = (proto) => {
  const obj = {};
  Object.setPrototypeOf(obj, proto);
  return obj;
}


const IncrementorProto = {
  inc() {
    console.log(++this.index);
  }
}

const incrementor = objectCreate(IncrementorProto);
incrementor.index = 0;

incrementor.inc();
incrementor.inc();
