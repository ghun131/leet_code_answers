function predictPartyVictory(senate: string): string {
  const radiants: number[] = [];
  const dire: number[] = [];

  for (let i = 0; i < senate.length; i++) {
    senate[i] === "R" ? radiants.push(i) : dire.push(i);
  }

  while (radiants.length !== 0 && dire.length !== 0) {
    const firstR = radiants.shift() as number;
    const firstD = dire.shift() as number;

    firstR < firstD
      ? radiants.push(firstR + senate.length)
      : dire.push(firstD + senate.length);
    console.log(firstR, firstD);
  }

  return radiants.length > 0 ? "Radiant" : "Dire";
}

// console.log(predictPartyVictory("RD"));
console.log(predictPartyVictory("RDD"));
