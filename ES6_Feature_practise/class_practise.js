class netflix{
    constructor(movie, category,languages){
        this.movie = movie
        this.category = category
        this.languages = languages
    }
    static a  = 10
    b=20
    static duno = "bush"
    watch(){
        console.log(netflix.a); // accessing static variable inside non static method
        console.log(this.b);  // accessing non static variable inside non static method
        console.log("inside non static method");
    }
    static wiki(){
        var x = new netflix() // create an object to access non static variable inside static method
        console.log(this.a); // accessing static variable inside static methods
        console.log(x.b); // accessing non static variable inside static method using object creation
        console.log("inside static method");
    }
    demo(){
        this.watch();  // accessing non static method inside non static method
        netflix.wiki() // accessing static method inside non static method
    }
    static run(obj_ref){
        this.wiki()   // accessing static method inside static method
        obj_ref.watch() // accessing non static method inside static method using obj_ref pass
    }
}
var screen1 = new netflix("vikram","thriller",["tamil","telugu","english"])
// console.log(netflix.a);
// console.log(screen1.b);
// netflix.wiki()
// screen1.watch()
// screen1.demo();
console.log(screen1.movie);
netflix.run(screen1)
