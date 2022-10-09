var railways = {
    carrierName:"Rajdhani express",
    distanceTravelling:"5000Kms",
    ticketStatus:"available",
    info:function(){
        console.log(this.trainName+" "+this.distanceTravelling+" "+this.ticketStatus);
    }
}
var airways = {
    carrierName:"PeriAir",
    distanceTravelling:"15000Kms",
    ticketStatus:"available",
    info:function(){
        console.log(this.trainName+" "+this.distanceTravelling+" "+this.ticketStatus);
    }
}
function bookTickets(data1,data2, data3) {
    console.log(data1+"  "+this.carrierName+"  "+data2+"  "+this.distanceTravelling+" "+data3);
}
bookTickets.apply(airways,["welcome to", "gonna travel","Fasten ur seatbelts"])
