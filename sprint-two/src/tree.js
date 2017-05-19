var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target, root) {
  root = root || this;
  // var result = false;
  if (root.value === target) {
    return true;
  }

  if (root.children.length) {
    for (let i = 0; i < root.children.length; i++) {
      var result = root.contains(target, root.children[i]);
      if (result) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
