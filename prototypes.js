function Incrementor(startingNumber) {
  this.index = startingNumber || 0;
}

Incrementor.prototype.inc = function() {
  console.log(this.index++);
}

const a = new Incrementor(5);
a.inc();
a.inc();
