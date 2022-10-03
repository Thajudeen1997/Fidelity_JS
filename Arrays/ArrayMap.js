var arr = [1, 2, 'hello',8, 3.45]
console.log(arr);
console.log(arr.map((value, index)=>{
    return value*2
}));
console.log(arr);
// output:-
// [ 1, 2, 'hello', 8, 3.45 ]
// [ 2, 4, NaN, 16, 6.9 ]
// [ 1, 2, 'hello', 8, 3.45 ]