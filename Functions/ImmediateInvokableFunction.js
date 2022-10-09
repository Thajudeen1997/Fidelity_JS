// (function read(a,b){
//     console.log(a+b);
// // })(5,6)
// (function write(a,b){
//     console.log(a+b);
// })(5,6)
// (write = function (a,b){
//     console.log(a+b);
// })(5,6)
var write = ((a,b)=>{
        console.log(a+b);
    })(5,16)