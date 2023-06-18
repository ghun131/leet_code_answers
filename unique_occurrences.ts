function uniqueOccurrences(arr: number[]): boolean {
    const occ = {}

    for (let i = 0; i < arr.length; i++) {
        occ[arr[i]] ? occ[arr[i]] += 1 : occ[arr[i]] = 1
    }

    const times = Object.values(occ);
    const timeSet = new Set(times);
    return timeSet.size === times.length;
//    for (let i = 0; i < times.length; i++) {
//        if (times[i + 1]) {
//            for (let j = i + 1; j < times.length; j++) {
//                if (times[i] === times[j]) return false;
//            }
//        }
//    }
//
//  return true;
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))
console.log(uniqueOccurrences([1,2]))
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))
