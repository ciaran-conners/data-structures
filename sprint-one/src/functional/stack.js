var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var nextIndex = 0;

  //push 'a'
  // storage = {0:'a'}
  //push 'b'
  //s ={0:'a', 1:'b'}
  // nextIndex = 2
  // pop
  // storage[1];


  // Implement the methods below
  someInstance.push = function(value) {
    storage[nextIndex] = value;
    nextIndex++;
  };

  someInstance.pop = function() {
    nextIndex--;
    var result = storage[nextIndex];
    delete storage[nextIndex];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
