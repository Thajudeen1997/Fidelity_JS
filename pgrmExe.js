var a = 10; // global
let b = 20; // script
const c = 30; // script
function read(x,y){
    var d = 40 // local
    let e = 50 // local
    const f = 60 // local
    {
        var g = 70; //local
        let h = 80; // block
        const i = 90 // block
        console.log(g);
    }
}
read(70,80)