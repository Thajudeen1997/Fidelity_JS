var showroom1 = {
    brand:"Audi",
    Price:"8Cr.",
    status:"available",
    testRun:function(){
        console.log(this.brand+"  "+this.Model+"  is  "+this.status);
    }
}
let carName=showroom1.brand
let rate=showroom1.Price
console.log(carName, rate);
let {status}= showroom1
let {brand}=showroom1
console.log(status ,  brand);
let{status:mark}= showroom1
console.log(mark);
