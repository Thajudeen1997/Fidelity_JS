function add(a,b) {
    return a+b
}
function sub(a,b) {
    return a-b
}
function main(a,b,fun) {
    console.log(fun(a,b));
}
main(3,2,add) 