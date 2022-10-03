var arr = [1,'hello',3.33] // declaration type 2
for (let index = 0; index < arr.length; index++) {
    console.log(index+"    "+arr[index]); 
}
console.log("array size=" +arr.length);
// output
// 0    1
// 1    hello
// 2    3.33
// array size=3

var arr = [3] // declaration type 2
for (let index = 0; index < arr.length; index++) {
    console.log(index+"    "+arr[index]); 
}
console.log("array size=" +arr.length);
// output
// 0    3
// array size=1