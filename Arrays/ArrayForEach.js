var arr = [1, 2, 'hello',8, 3.45]
arr.forEach((element, index) => {
    console.log(index+"  "+element);
    console.log(element*2);
});
console.log(arr);
// Output:-
// 0  1
// 2
// 1  2
// 4
// 2  hello
// NaN
// 3  8
// 16
// 4  3.45
// 6.9
// [ 1, 2, 'hello', 8, 3.45 ]
arr.forEach((element, index) => {

    console.log(element*10);
});
console.log(arr);
//output:-
// 10
// 20
// NaN
// 80
// 34.5
// [ 1, 2, 'hello', 8, 3.45 ]