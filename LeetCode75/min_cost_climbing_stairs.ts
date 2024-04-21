 function minCostClimbingStairs(cost: number[]): number {
     let first = cost[0];
     let second = cost[1];

     if (cost.length <= 2) return Math.min(first, second);

     for (let i = 2; i < cost.length; ++i) {
         const curr = cost[i] + Math.min(first, second);
         first = second;
         second = curr;
     }
     return Math.min(first, second);
 };

console.log(minCostClimbingStairs([10,15,20]));
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));
