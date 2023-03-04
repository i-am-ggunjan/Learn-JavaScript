(function (n) {
    console.log("Immediate Invoke Function");
    return n*n;
    // this function doesnot return anything.even JS Engine not returning anything here.
})(5);

(function (n) {
    console.log("Immediate Invoke Function");
    console.log(n*n);
})();

(function (n) {
    console.log("Immediate Invoke Function");
    console.log(n*n);
})(5);


console.log((function (n) {
    console.log("Immediate Invoke Function");
    console.log(n*n);
})(5));