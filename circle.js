class Circle{
    constructor(radius, color){
    this.radius=radius;
    this.color=color;
}
get radiusCircle(){
    return this.radius
}
get colorCircle(){
 return this.color   
}
set radiusCircle(radius){
    this.radius=radius;
}
set colorCircle(color){
    this.color=color;
}
get toString(){
    return Circle[`radius=${this.radius}:color=${this.color}`]
}
get area(){
    return Math.PI*this.radius*this.radius
}
get circumference(){
    return 2*Math.PI*this.radius
}
}

var obj1=new Circle(1.0,"red")
 console.log(obj1.radius)
 console.log(obj1.color)
obj1.radiusCircle=2.2;
obj1.colorCircle="blue";
console.log(obj1.radiusCircle)
console.log(obj1.colorCircle)
console.log(obj1.area)
console.log(obj1.circumference)

// OUTPUT:
// circle.js:30 1
// circle.js:31 red
// circle.js:34 2.2
// circle.js:35 blue
// circle.js:36 15.205308443374602
// circle.js:37 13.823007675795091