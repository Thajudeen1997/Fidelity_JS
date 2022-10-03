var arr = [10, 2, 'hello',8, 3.45]
console.log(arr);
console.log(arr.sort((a,b)=>{
    return a-b                  // arrange the array in ascending order
}));
console.log(arr);
// output:-
// [ 10, 2, 'hello', 8, 3.45 ]
// [ 2, 3.45, 8, 10, 'hello' ]
// [ 2, 3.45, 8, 10, 'hello' ]

console.log(arr);
console.log(arr.sort((a,b)=>{
    return b-a                  // arrange the array in descending order
}));
console.log(arr);
// output:-
// [ 2, 3.45, 8, 10, 'hello' ]
// [ 10, 8, 3.45, 2, 'hello' ]
// [ 10, 8, 3.45, 2, 'hello' ]