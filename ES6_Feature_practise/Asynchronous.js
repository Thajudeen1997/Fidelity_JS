console.log("login");
setTimeout(()=>{
    console.log("inside set1");
},1000)
setTimeout(()=>{
    console.log("inside set2");
},3000)
setTimeout(()=>{
    console.log("inside set3");
},2000)
setInterval(()=>{
    console.log("inside set Interval");
},4000)
console.log("logout");