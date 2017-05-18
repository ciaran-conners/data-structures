var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.nextIndex = 0;
  instance.frontIndex = 0;
  instance.storage = {};
  return instance;
};

var enqueue = function(value) {
  this.storage[this.nextIndex] = value;
  this.nextIndex++;
};

var dequeue = function() {
  if (this.size()) {
    var result = this.storage[this.frontIndex];
    delete this.storage[this.frontIndex];
    this.frontIndex++;
    return result;
  }
};

var size = function() {
  return Object.keys(this.storage).length;
};



var queueMethods = {
  enqueue: enqueue,
  dequeue: dequeue,
  size: size
};


