var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.nextIndex = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.nextIndex] = value;
  this.nextIndex++;
};

Stack.prototype.pop = function() {
  if (this.size()) {
    this.nextIndex--;
    var result = this.storage[this.nextIndex];
    delete this.storage[this.nextIndex];
    return result;
  }

};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};




