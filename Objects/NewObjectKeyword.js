// Type 2:
// syntax : 
// var obj_ref  = new Object()
// obj_ref.prop1 = value1
// obj_ref.prop2 = value2
var digitalLibrary = new Object()
digitalLibrary.languageBooks={Tamil:"PS-1", English:"Novels", Arabic:["scripts", "literatures"]}
digitalLibrary.authorStandard='international'
digitalLibrary.cost=function(){return "Rs 8000/-"}
console.log(digitalLibrary.languageBooks.Arabic[1]);
console.log(digitalLibrary.cost());