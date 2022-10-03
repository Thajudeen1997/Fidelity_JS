// syntax:
// class obj_ref
// {
//     constructor(prop1,prop2,prop3,..)
 //    {
        // this.prop1=prop1
        // this.prop2=prop2
        // this.prop3=prop3
        
//     }
// }
// var ref_name = new obj_ref(value1, value2, value3,..)

class personalDetails
{
    constructor(name,age,address,qual,languageKnown)
    {
        this.name=name
        this.age=age
        this.address=address
        this.qual=function(){return "B.E"}
    }
}
var PersonalDetails1 = new personalDetails("Thajudeen","25",{streetName:"karur main road", doorNo:"61/70", district:"tiruppur"})
console.log(PersonalDetails1.qual());