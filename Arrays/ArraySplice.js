var arr = [1, 'hello', 3]
console.log(arr);
console.log(arr.splice(1,1,"hi there")); // (startingIndex, DeleteCount, ElementToBeAdded)
console.log(arr);
// Output:-
// [ 1, 'hello', 3 ]
// [ 'hello' ]          --> deleted element
// [ 1, 'hi there', 3 ]

console.log(arr);
console.log(arr.splice(1,0,"hi there"));
console.log(arr);
// Output:-
// [ 1, 'hi there', 3 ]
// []                               --> no element is deleted so empty array
// [ 1, 'hi there', 'hi there', 3 ]