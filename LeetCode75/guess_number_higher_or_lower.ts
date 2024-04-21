/**
    * Forward declaration of guess API.
    * @param {number} num   your guess
* @return 	     -1 if num is higher than the picked number
    *			      1 if num is lower than the picked number
        *               otherwise return 0
* var guess = function(num) {}
*/
let pick = 6;

function guess(num: number): number {
    if (num === pick) return 0;
    if (num > pick) return -1;
    return 1;
}


function guessNumber(n: number): number {
    let start = 0;

    while (start < n) {
        const mid = Math.floor((n + start) / 2);
        const val = guess(mid);

        if (val === 0) {
            return mid;
        } else if (val === 1) {
            start = mid + 1
        } else {
            n = mid;
        }
    }

    return start
};

console.log(guessNumber(10));

pick = 1;
console.log(guessNumber(1));

pick = 1
console.log(guessNumber(2));

pick = 2
console.log(guessNumber(2));
