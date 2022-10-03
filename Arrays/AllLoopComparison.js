var arr = [1, ,'thaju', , 2.333]
for (let index = 0; index < arr.length; index++) {
    console.log(index+"    "+arr[index]); 
} 
console.log(); 
// Output:-
// 0    1
// 1    undefined
// 2    thaju
// 3    undefined
// 4    2.333
for (const index in arr) {
    console.log(index+"    "+arr[index]);       
}
console.log(); 
// Output:-
// 0    1
// 2    thaju
// 4    2.333
for (const index of arr) {
    console.log(index);
}
console.log();
// Output:-
// 1
// undefined
// thaju
// undefined
// 2.333
arr.forEach((element, index, arr) => {
    console.log(index+"       "+element+"     "+arr);
});
// Output:-
// 0       1         1,,thaju,,2.333
// 2       thaju     1,,thaju,,2.333
// 4       2.333     1,,thaju,,2.333