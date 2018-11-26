function Derivative(f) {
    var h = 1e-06;
    return function(x) {
        return (f(x+h) - f(x)) / h;
    }
}

dsin = Derivative(Math.sin); // Be a Function
console.log(dsin(0));
