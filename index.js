function add (x, y) {
  return x + y
}

<<<<<<< HEAD
function makeAdder (x, addReference) {
  return function (y) {
    return addReference(x, y)
  }
=======
function addFive (x, addReference) {
  return addReference(x, 5)
}

function addTen (x, addReference) {
  return addReference(x, 10)
}

function addTwenty (x, addReference) {
  return addReference(x, 20)
>>>>>>> dev-test
}