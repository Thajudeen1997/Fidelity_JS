var showroom1 = {
    brand:"Audi",
    Price:"8Cr.",
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
function counselling(data1, data2) {
    console.log(data1+"  "+this.brand+"  "+this.status+"  "+data2);
}
var couns = counselling. bind(showroom1,"hello","Please come")
couns()
