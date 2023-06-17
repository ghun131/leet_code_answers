function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let greatest = candies[0];
    const result: boolean[] = [];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > greatest) greatest = candies[i];
    }

    for (let i = 0; i < candies.length; i++) {
       result.push(candies[i] + extraCandies >= greatest)
    }

    return result;
};

console.log('start');
console.log(kidsWithCandies([4,2,1,1,2], 1));
console.log(kidsWithCandies([2,3,5,1,3], 3));
console.log(kidsWithCandies([12,1,12], 10));
