async function sync(){
    console.log("execution started");
    var p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success")
            reject("failure")
        },3000)
    })
    await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    console.log("execution end");

    var o = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("launched")
            reject("rejected")
        },2000)
    })
   
    await o.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
    console.log("thread");
}
sync()

