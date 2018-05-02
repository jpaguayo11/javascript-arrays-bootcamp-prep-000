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
function destructivelyAddElementToEndOfArray(array, element) {
  var modifyOld = [parseInt(array)]
  modifyOld.unshift(element)
  return modifyOld
}
