function increasingTriplet(nums: number[]): boolean {
    let first = Infinity;
    let second = Infinity;

    for (let curr of nums) {
        if (curr <= first) {
            first = curr;
        }
        else if (curr <= second) {
            second = curr;
        } else {
            return true;
        }
    }

    return false;
};


console.log(increasingTriplet([1,2,3,4,5]));
console.log(increasingTriplet([5,4,3,2,1]));
console.log(increasingTriplet([2,1,5,0,4,6]));
console.log(increasingTriplet([5,1,6]));
console.log(increasingTriplet([1,5,0,4,1,3]));
console.log(increasingTriplet([0,4,2,1,0,-1,-3]));
