// Type 3:-
// Syntax: 
// function ref_name(prop1, prop2, prop3,..){
//     this.prop1=prop1
//     this.prop2=prop2
//     this.prop3=prop3
// }
// var obj_ref1 = new ref_name(value1, value2, value3,..)
// var obj_ref2 = new ref_name(value1, value2, value3,..)
function personalDetails( name,age,address,qual){
    this.name=name
    this.age=age
    this.address=address
    this.qual=function(){return "B.E"}
}
var PersonalDetails1 = new personalDetails("Thajudeen","25",{streetName:"karur main road", doorNo:"61/70", district:"tiruppur"})
PersonalDetails1.languageKnown=["english","Tamil"]
console.log(PersonalDetails1);
console.log(PersonalDetails1.languageKnown[1]);


