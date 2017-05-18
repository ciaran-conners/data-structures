var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head) {
      list.tail.next = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;
      list.head = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head) {
      var toRemove = list.head.value;
      list.head = list.head.next;
      return toRemove;
    }
  };

  list.contains = function(target, currentNode) {
    var currentNode = currentNode || list.head;
    if (currentNode.value === target) {
      return true;
    } else {
      currentNode = currentNode.next;
      if (currentNode) {
        return list.contains(target, currentNode);
      }
    }
    return false;
   };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
