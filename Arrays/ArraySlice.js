var arr = [2.2, 'hello', 89, 'ding', 9786]
console.log(arr);
console.log(arr.slice(1,4)); // (1,4) --> (StartingIndex, endingIndex) and leaves the end index number
console.log(arr);
// Output:-
// [ 2.2, 'hello', 89, 'ding', 9786 ]
// [ 'hello', 89, 'ding' ]              --> The trimmed part
// [ 2.2, 'hello', 89, 'ding', 9786 ]