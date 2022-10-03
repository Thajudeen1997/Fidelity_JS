var personalDetails={
    name:"Thajudeen",
    age:"25",
    address:{
        streetName:"karur main road",
        doorNo:"61/70"
    },
    qual:function(){
        return "B.E"
    }
}
var personalDetails1 = {}
personalDetails1.__proto__ = personalDetails
personalDetails1.name="faiz"
personalDetails1.age="8"
console.log(personalDetails1)
