var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var nextIndex = 0;
  var frontIndex = nextIndex;

  // Implement the methods below
  // frontIndex = 0
  // storage = {}
  // enqueue = 'a';
  //storage = {0:'a'}
  // enqeue = 'b'
  // str = {0:'a', 1: 'b'}
  // enque = 'c'
  // str = {0:'a', 1:'b', 2:'c'}
  // delete storage[frontIndex];
  // str = {1:'b', 2:'c'}
  // delete storage[frontIndex];
  // str = {2:'c'}
  // enque = 'd';
  // str = {2:'c', 3:'d'}
  // deleted
  // str = {3:'d'}

  // storage[0];


  someInstance.enqueue = function(value) {
    // we need to link numeric keys and values added w/in storage obj
    // a counter - to keep track of what index we're at
    storage[nextIndex] = value;
    nextIndex++;

  };

  someInstance.dequeue = function() {
    var result = storage[frontIndex];
    delete storage[frontIndex];
    frontIndex++;
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
