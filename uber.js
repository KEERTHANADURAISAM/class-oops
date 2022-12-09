class Uber{
    constructor(distance,price,waitingcharge){
        this.distance = distance;
        this.price = price;
        this.waitingcharge =waitingcharge;
}
setdistance(distance){
return  this.distance = distance;;
}
getridedetails(){
    return (`The distance of the ride is${this.distance} with the price of ${this.price} and the waiting charge is ${this.waitingcharge}`);
}
getprice(){
    var rate=(this.distance * this.price)+(5*this.waitingcharge)
    return rate;
}
}
let uber1=new Uber(400,20,10);
uber1.setdistance(300)
console.log(uber1.getprice())
console.log(uber1.getridedetails())

// output:
// uber.js:20 6050
// uber.js:21 The distance of the ride is300 with the price of 20 and the waiting charge is 10