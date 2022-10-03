var arr = new Array(1, 'thaju' , 2.333) // declaration type 1
for (let index = 0; index < arr.length; index++) {
    console.log(index+"    "+arr[index]); 
} 
console.log("array size=" +arr.length);
// output:
// 0    1
// 1    thaju
// 2    2.333
// array size=3
var arr  = new Array(4) // declaration type 1
for (let index = 0; index < arr.length; index++) {
    console.log(index+"    "+arr[index]); 
} 
console.log("array size=" +arr.length);
// output:
// 0    undefined
// 1    undefined
// 2    undefined
// 3    undefined
// array size=4
var arr  = new Array('hello') // declaration type 1
for (let index = 0; index < arr.length; index++) {
    console.log(index+"    "+arr[index]); 
} 
console.log("array size=" +arr.length);
// output:-
// 0    hello
// array size=1