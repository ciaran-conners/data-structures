var BinarySearchTree = function(value) {
  var instance = Object.create(bstMethods);
  instance.value = value;
  instance.right = null;
  instance.left = null;

  return instance;
};

var bstMethods = {};

/*
    5 root
    insert 2
left   right
  2

*/

bstMethods._recusiveInsert = function(node, newNode, dir) {
  if (node) {
    node.insert(newNode.value);
  } else {
      // at this point, we have to assign newNode to a BST
    this[dir] = newNode;
  }
};

bstMethods.insert = function(value) {
  var newNode = BinarySearchTree(value);
  var dir = (value <= this.value) ? 'left' : 'right';
  this._recusiveInsert(this[dir], newNode, dir);
};

bstMethods.contains = function(target, currentNode) {
  currentNode = currentNode || this;
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

  return currentNode.contains(target, currentNode);
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
