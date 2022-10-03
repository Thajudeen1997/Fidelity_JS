var met1 = {
    brand:"BMW",
    model:2008,
    check:function(){
        console.log(this.cc);
        console.log(this.brand);
    }
}
var met2 = {
    brand:"TATA",
    model:2018,
    check1:function(){
        console.log(met1.brand);
        console.log(this.brand);
    }
}
met1.check()
met2.check1()
