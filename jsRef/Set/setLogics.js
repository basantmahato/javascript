seatA = new Set(['A', 'B', 'C', 'D']);
seatB = new Set(['C', 'D', 'E', 'F']);

let intersection = seatA.intersection(seatB);
console.log(intersection);

let union = seatA.union(seatB);
console.log(union);

let difference = seatA.difference(seatB);
console.log(difference);