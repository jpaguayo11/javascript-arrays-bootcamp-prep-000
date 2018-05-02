var chocolateBars = new Array(
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
)
function addElementToBeginningOfArray(array, element) {
  var createNew = [parseInt(array)]
  var createNew = [element, ...createNew]
  return createNew
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  var createNew = [parseInt(array)]
  var createNew = [...createNew, element]
  return createNew
}
function accessElementInArray(array, index) {
  return array[index]
}
