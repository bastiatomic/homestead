import { zip, interval, from } from "rxjs";

const a = [
  [0, 3],
  [0, 3, 16],
  [0, 3, 14],
  [0, 3, 16, 41],
  [0, 3, 16, 41, 43],
  [0, 3, 16, 41, 60],
  [1, 4],
  [1, 3],
  [2, 9],
  [2, 4],
  [29, 17],
  [29, 28],
  [29, 16],
  [29, 41],
  [29, 30],
  [29, 40],
  [42, 31],
  [42, 41],
  [42, 30],
  [42, 53],
  [42, 43],
  [42, 52],
  [5, 16],
  [5, 16, 3],
  [5, 16, 41],
  [5, 16, 3, 14],
  [5, 16, 41, 43],
  [5, 16, 41, 60],
  [5, 4],
  [5, 9],
  [6, 3],
  [6, 15],
  [6, 14],
  [7, 9],
  [7, 4],
  [7, 3],
  [7, 16],
  [7, 15],
  [8, 4],
  [8, 17],
  [8, 9],
  [8, 16],
  [51, 41],
  [51, 50],
  [51, 40],
  [51, 61],
  [51, 52],
  [51, 60],
];
const n = 750;

zip(from(a), interval(n)).subscribe(([num]) => console.log(num));
