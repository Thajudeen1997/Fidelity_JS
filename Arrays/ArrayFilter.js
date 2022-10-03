var arr = [1, 2, 'hello',8, 3.45]
console.log(arr);
console.log(arr.filter((element, index)=>{
    if(element>3)
    return element
}));
console.log(arr);
// Output:-
// [ 1, 2, 'hello', 8, 3.45 ]
// [ 8, 3.45 ]                  ---> return the elments as per the if condition
// [ 1, 2, 'hello', 8, 3.45 ]