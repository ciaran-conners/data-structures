var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    nextIndex: 0,
    frontIndex: 0,
    storage: {}
  };
  _.extend(instance, queueMethods);
  return instance;
};

var enqueue = function(value) {
  this.storage[this.nextIndex] = value;
  this.nextIndex++;
};

var dequeue = function() {
  var result = this.storage[this.frontIndex];
  delete this.storage[this.frontIndex];

  this.frontIndex++;
  return result;
};

var size = function() {
  return Object.keys(this.storage).length;
};

var queueMethods = {
  enqueue: enqueue,
  dequeue: dequeue,
  size: size
};

