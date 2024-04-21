class RecentCounter {
    private range: number[];
    constructor() {
        this.range = [];
    }

    ping(t: number): number {
        this.range.push(t);

        while (this.range[0] < t - 3000) {
            this.range.shift();
        }

        return this.range.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */


const recentCounter = new RecentCounter();
const param1 = recentCounter.ping(1);
const param2 = recentCounter.ping(100);
const param3 = recentCounter.ping(3001);
const param4 = recentCounter.ping(3002);

// const param1 = recentCounter.ping(642);
// const param2 = recentCounter.ping(1849);
// const param3 = recentCounter.ping(4921);
// const param4 = recentCounter.ping(5936);
// const param5 = recentCounter.ping(5957);

// console.log(param1, param2, param3, param4, param5);
console.log(param1, param2, param3, param4);
