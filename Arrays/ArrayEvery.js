var arr = [1, 2, 4, 6]
console.log(arr);
console.log(arr.every((element)=>{
    return element<5
}))                                 // every(element) --> checks for all the element is lesser than 5 or not. If one fails all fails
console.log(arr);
// Output:-
// [ 1, 2, 'hello', 6 ]
// false
// [ 1, 2, 'hello', 6 ]