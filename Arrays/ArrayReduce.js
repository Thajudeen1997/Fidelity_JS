var arr = [100, 56, 73, 64]
console.log(arr);
function nam(total, number) {
    return total-number
}
console.log(arr.reduce(nam)); //--> reduce the array element based on the operator sign
console.log(arr);
// output:-
// [ 100, 56, 73, 64 ]
// -93
// [ 100, 56, 73, 64 ]