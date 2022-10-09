class tours{
    constructor(name,location, days){
        this.name=name
        this.location=location
        this.days=days
    }
    static travel ="faster"
    concession="available"
    airways(){
        console.log("inside non static method");
        console.log(this.concession);
        console.log(tours.travel);
    }
    static railways(){
        console.log("inside static method");
        console.log(this.travel);
        var ob = new tours()
        console.log(ob.concession);
    }
    static invo(obj_ref){
        this.railways()
        obj_ref.airways()
    }
    nonInvo(){
        tours.railways()
        this.airways()
    }
}
var plan = new tours("rahman travels","dubai",10)
// console.log(tours.travel);
// console.log(plan.concession);
// plan.airways()
// tours.railways()
tours.invo(plan)
plan.nonInvo()
