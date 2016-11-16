const AwesomeProto = {
  awesome() {
    console.log('Everything is awesome!');
  }
}

const IncrementorProto = Object.assign(
  Object.create(AwesomeProto),
  {
    inc() {
      console.log(++this.index);
    }
  }
);

module.exports = {
  create(startingIndex) {
    const obj = Object.create(IncrementorProto);
    obj.index = startingIndex || 0;
    return obj;
  }
}
