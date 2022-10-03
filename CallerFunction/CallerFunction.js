function add(a,b) {
    return a+b
}
function sub(a,b) {
    return a-b
}
function main(a,b, funct) {
    console.log("The operation executed ");
    console.log(funct(a,b));
}
main(9,3, sub)