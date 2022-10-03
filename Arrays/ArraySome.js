var arr = [2, 9, 8, 6]
console.log(arr);
console.log(arr.some((element)=>{
    return element<5
}))                                 // every(element) --> checks for all the element is lesser than 5 or not. If atleast one pass all passes
console.log(arr);
// Output:-
// [ 2, 9, 8, 6 ]
// true
// [ 2, 9, 8, 6 ]