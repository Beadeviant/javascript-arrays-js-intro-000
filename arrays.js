var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
function addElementToBeginningOfArray(array, element){
var newArray = [element, ...array]
return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift(element)
return array
}
function addElementToEndOfArray(array, element){
  var endArray =[...array, element]
  return endArray
}
function destructivelyAddElementToEndOfArray(array, element){
array.push(element)
return array
}
function accessElementInArray() {

}
function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift
return array
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array, element){
  array.pop(element)
  return array
}
