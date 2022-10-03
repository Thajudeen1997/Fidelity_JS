function main(a,b, funct) {
    console.log("Main function is executed");
    console.log(funct(a,b));
    console.log("Main function is completed");
}
function add(a,b) {
    console.log("called function is executed");
    return a+b    
}
function mul(a,b) {
    console.log("called function is executed");
    return a*b
}
main(7,3, mul)