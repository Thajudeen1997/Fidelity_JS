var arr = [1, 'hello', 3]
var arr1 = "ding"
console.log(arr);
console.log(arr.unshift(arr1));  // add the element to the 1st index
console.log(arr);
// Output:-
// [ 1, 'hello', 3 ]
// 4                        --> length of the array
// [ 'ding', 1, 'hello', 3 ]