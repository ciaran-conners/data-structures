var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.nextIndex = 0;
  instance.storage = {};
  return instance;
};

var push = function(value) {
  this.storage[this.nextIndex] = value;
  this.nextIndex++;
};

var pop = function() {
  if (this.size() > 0) {
    this.nextIndex--;
    var result = this.storage[this.nextIndex];
    delete this.storage[this.nextIndex];
    return result;
  }
};

var size = function() {
  return Object.keys(this.storage).length;
};

var stackMethods = {
  push: push,
  pop: pop,
  size: size
};


