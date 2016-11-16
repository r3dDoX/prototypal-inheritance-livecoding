const IncrementorProto = {
  inc() {
    console.log(++this.index);
  }
}


module.exports = {
  create(startingIndex) {
    const obj = Object.create(IncrementorProto);
    obj.index = startingIndex || 0;
    return obj;
  }
}
