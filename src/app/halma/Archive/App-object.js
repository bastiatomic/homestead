/*let a = {
  1: new Set(),
  2: new Set(),
  3: new Set(),
  4: new Set(),
  5: new Set(),
  6: new Set(),
  occupied: new Set(),
};

[0, 1, 2, 29, 42, 5, 6, 7, 8, 51].forEach((i) => a[1].add(i));

[19, 20, 21, 22, 32, 33, 34, 44, 45, 55].forEach((i) => a[2].add(i));

[74, 84, 85, 95, 96, 97, 107, 108, 109, 110].forEach((i) => a[3].add(i));

[111, 112, 113, 114, 115, 116, 117, 118, 119, 120].forEach((i) => a[4].add(i));
[65, 75, 76, 86, 87, 88, 98, 99, 100, 101].forEach((i) => a[5].add(i));
[10, 11, 12, 13, 23, 24, 25, 35, 36, 46].forEach((i) => a[6].add(i));

for (const index of ["1", "2", "3", "4", "5", "6"]) {
  for (const value of a[index]) {
    a.occupied.add(value);
  }
}*/

let binaryArray = Array(120 + 1).fill(0);

[0, 1, 2, 29, 42, 5, 6, 7, 8, 120].forEach((i) => (binaryArray[i] = 1));

binaryArray = parseInt(binaryArray.reverse().join(""), 2);

console.log(binaryArray);

console.log(binaryArray.filter((item) => item == 1));
