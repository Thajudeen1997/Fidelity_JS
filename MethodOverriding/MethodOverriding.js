var bookStore = {
    bookName:"Novels",
    price:"8000",
    status:"available",
    publication:["international","local","global"],
    standard:function(){
        return this.bookName+"  "+this.price+"  "+this.status
        }
}
var bookStore1 = Object.create(bookStore)
bookStore1.bookName="literature"
bookStore1.price="10000"
bookStore1.status="Unavailable"
console.log(bookStore1.standard());
console.log(bookStore.standard());
console.log(bookStore1.status);
console.log(bookStore.status);