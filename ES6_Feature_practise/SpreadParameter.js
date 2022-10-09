// scenario 1
var nam ="thaju"
var arr = [...nam]
console.log(arr[2]);
console.log([...nam]);
// output:
// [ 't', 'h', 'a', 'j', 'u' ]

// scenario 2
// var arr1=[2,4,6,8]
// var arr2=[1,3,5,7]
// var arr3=[...arr1,...arr2]
// console.log(arr3);
// // output:-
// // [2, 4, 6, 8, 1, 3, 5, 7 ]

// // scenario 3
// var arr1=[2,4,6,8]
// var arr2=[...arr1,10]
// var arr3=[10,...arr1]
// console.log(arr2);
// console.log(arr3);
// // Output:-
// // [ 2, 4, 6, 8, 10 ]
// // [ 10, 2, 4, 6, 8 ]

// // scenario 4
// var obj1 = {name:"thaju", age:25, address:"bangalore"}
// var obj2 = {pincode:560045}
// var obj3 = {...obj1,...obj2}
// var obj4 = { gender:"male",...obj2}
// console.log(obj3);
// console.log(obj4);
// // output:-
// // { name: 'thaju', age: 25, address: 'bangalore', pincode: 560045 }
// // { pincode: 560045, gender: 'male' }

// // scenario 5
// var obj1 = {name:"thaju", age:25, address:"bangalore"}
// var obj2 = {pincode:560045, address:"nagawara"}
// var obj3 = {...obj1,...obj2}
// console.log(obj3);
// // output:-
// // { name: 'thaju', age: 25, address: 'nagawara', pincode: 560045 }