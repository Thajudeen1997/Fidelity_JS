var arr = [23, 56,32, 67]
console.log(arr);
function func(total, number) {
    return total-number
}
console.log(arr.reduceRight(func)); //--> start reducing from the right to left
console.log(arr);
// output:-
// [ 23, 56, 32, 67 ]
// -44
// [ 23, 56, 32, 67 ]