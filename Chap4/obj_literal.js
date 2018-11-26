var circle = {
    center: { x: 1.0, y: 2.0 },
    radius: 2.5,
    area: function() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(`Center: (${circle.center.x}, ${circle.center.y})\nRadius: ${circle.radius}\nArea:${circle.area()}`);