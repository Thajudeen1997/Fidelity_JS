var a = [2, 'hello', 34]
for (let index = 0; index < a.length; index++) {
    if (index<3) {
        console.log(index);
        break
    }
    console.log('outside break if');
}
console.log('executing continue block');
for (let index = 0; index < a.length; index++) {
    if (index<2) {
        console.log(index);
        continue
    }
    console.log('outside continue if');
}