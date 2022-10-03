// object literal syntax
// syntax:- var obj_ref = { prop1:key1, prop2:key2}
var personalDetails = {
    name:"Thajudeen",
    Age:25,
    Address:{
        streetName:"karur main road",
        doorNo:"61/70",
        district:"tiruppur"
    },
    qual:function(){
        return "B.E"
    }
}
// console.log(personalDetails);
// personalDetails.maritalStatus="single"
// console.log(personalDetails);
// delete personalDetails.maritalStatus
// console.log(personalDetails);
// console.log(personalDetails.Address);
personalDetails.Address.languagesKnown=["english", "hindi","kannada"]
console.log(personalDetails.Address.streetName);
// console.log(personalDetails);
console.log(personalDetails.qual());
console.log(personalDetails.Address.languagesKnown[2]);