function myPow(x: number, n: number): number {
    if (n === 0) return 1;
    
    if (n < 0) return 1 / myPow(x, -n);

    return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x * x, (n - 1) / 2);

};

// console.log(myPow(3, 2));
// console.log(myPow(2, 3));
console.log(myPow(0.00001, 2147483647));
console.log(myPow(2, 5));
// console.log(myPow(2, -5));
