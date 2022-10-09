function bike (brand,model,otherDetails){
    console.log(otherDetails);
}
bike("BMW","2022","200cc","TDSI engine","20KMPL","1lakh")

var {name,type,...addmenus}={
    name:"Rice",
    type:"veg",
    spicy:"medium",
    style:"andhra",
    variety:["var1","var2","var3"]
}
console.log(addmenus);