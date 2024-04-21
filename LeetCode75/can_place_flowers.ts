function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const pre = i === 0 ? 0 : flowerbed[i-1];
            const next = i === flowerbed.length - 1 ? 0 : flowerbed[i+1];

            if (pre === 0 && next ===0) {
                flowerbed[i] = 1;
                n -= 1;
            }
        }
    }

     return n <= 0;
 };

console.log(canPlaceFlowers([1,0,0,0,0,1], 2));
console.log(canPlaceFlowers([1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,0,0,1], 2));

