var arr = [1, 2, 'hello',8, 3.45]
console.log(arr);
console.log(arr.includes(2, 0)); // (2,0) 2--> element to be searched , 0 --> index from where to start searching 
console.log(arr);
// output:-
// [ 1, 2, 'hello', 8, 3.45 ]
// true
// [ 1, 2, 'hello', 8, 3.45 ]

var arr = [1, 2, 'hello',8, 3.45]
console.log(arr);
console.log(arr.includes(2)); // if does not specify it automatically takes 0 index
console.log(arr);
// output:-
// hello', 8, 3.45 ]
// true
// [ 1, 2, 'hello', 8, 3.45 ]