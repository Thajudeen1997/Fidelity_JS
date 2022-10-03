var arr = [2, 'done', 4.5]
console.log("index"+"  "+"value"+"     "+ "arr");
arr.forEach((value, index, arr) =>{
    
    console.log(index+"       "+value+"     "+ arr);
});
// output:-
// index  value    arr
// 0      2        2,done,4.5
// 1      done     2,done,4.5
// 2      4.5      2,done,4.5