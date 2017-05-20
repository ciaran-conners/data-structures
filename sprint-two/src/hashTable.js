

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var value;
  _.each(bucket, function(tuple) {
    if (_.contains(tuple, k)) {
      value = tuple[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket  = this._storage.get(index);
  _.each(bucket, function(tuple, idx) {
    if (_.contains(tuple, k)) {
      bucket.splice(idx, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


