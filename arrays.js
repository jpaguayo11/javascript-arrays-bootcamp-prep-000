var chocolateBars = new Array(
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
)
function addElementToBeginningOfArray(array, element) {
  var createNew = [`${array}`]
  var createNew = [element, ...createNew]
  return createNew
}
