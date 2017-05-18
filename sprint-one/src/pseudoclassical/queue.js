var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.nextIndex = 0;
  this.frontIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.nextIndex] = value;
  this.nextIndex++;
};

Queue.prototype.dequeue = function() {
  var result = this.storage[this.frontIndex];
  delete this.storage[this.frontIndex];
  this.frontIndex++;
  return result;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

