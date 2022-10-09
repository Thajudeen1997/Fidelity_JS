function sum(a,b){
    return a+b
}
console.log(sum(10)); // here b is undefined so we get output as not an number NaN
// output:- Nan

function sum(a,b=2){
    return a+b
}
console.log(sum(10)); // here b is already initialized
// output:- 12

function sum(a,b=2){
    return a+b
}
console.log(sum(10,4));  // b which is initilized as 2 will be overriden as 4
// output:- 14

function sum(a=1,b){
    return a+b
}
console.log(sum(10)) // 10 will be passed only to "a" not to b. hence its not possible

class fun{
    constructor(a,b){
        console.log(a+b);
    }
}
new fun(10,30)