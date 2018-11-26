function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
    this.area = function() {
        return Math.PI * this.radius * this.radius;
    }
}

var circ1 = new Circle({x: 1, y: 2}, 1);
var circ2 = new Circle({x: 0, y: 2}, 3);
var circ3 = new Circle("hi", "hello");
console.log(circ1);
console.log(circ1.area());
console.log(circ2);
console.log(circ3);