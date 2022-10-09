var showroom1 = {
    brand:"BMW",
    Model:"2022",
    status:"available",
    testRun:function(){
        console.log(this.brand+"  "+this.Model+"  is  "+this.status);
    }
}
var showroom2 = {
    brand:"TATA",
    Model:"2023",
    status:"available",
    testRun1:function(){
        console.log(this.brand+"  "+this.Model+"  is  "+this.status);
    }
}
var showroom3 = {
    brand:"VOLVO",
    Model:"2021",
    status:"available",
    testRun1:function(data1, data2){
        console.log(data1+" "+this.brand+"  "+this.Model+"  is  "+this.status+" "+data2);
    }
}
function counselling(data1, data2) {
    console.log(data1+"  "+this.brand+"  "+this.status+"  "+data2);
}
// counselling.call(showroom2,"hello","Happy buying")
showroom2.testRun1.call(showroom1,"hello","Happy buying")
