var BinarySearchTree = function(value) {
  var instance = Object.create(bstMethods);
  instance.value = value;
  instance.right = null;
  instance.left = null;

  return instance;
};

var bstMethods = {};

bstMethods._recusiveInsert = function(node, newNode, dir) {
  if (node) {
    node.insert(newNode.value);
  } else {
    this[dir] = newNode;
  }
};

bstMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);
  var dir = (value <= this.value) ? 'left' : 'right';
  this._recusiveInsert(this[dir], newNode, dir);
};

bstMethods.contains = function(target) {
  var currentNode = currentNode || this;
  if (currentNode.value === target) {
    return true;
  }
  if (currentNode.value <= target) {
    currentNode = currentNode.right;
  } else {
    currentNode = currentNode.left;
  }
  if (!currentNode) {
    return false;
  }
  return currentNode.contains(target);
};

bstMethods.depthFirstLog = function(callback) {
  if (Object.getPrototypeOf(this) !== bstMethods) {
    return;
  }
  callback(this.value);
  this.depthFirstLog.call(this.left, callback);
  this.depthFirstLog.call(this.right, callback);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
