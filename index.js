function add (x, y) {
  return x + y
}

function makeAdder (x, addReference) {
  return function (y) {
    return addReference(x, y)
  }
}