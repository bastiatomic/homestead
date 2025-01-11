let a = {
    '0': [
      33, 34, 36, 44, 51, 53,
      57, 61, 72, 76, 83, 84,
      93, 94
    ],
    '1': [ 13, 14, 23, 24 ],
    '2': [ 32, 41, 42, 43, 52 ],
    '3': [ 35, 45, 46 ],
    '4': [ 55, 56 ],
    '5': [ 62, 63, 73 ],
    '6': [ 64, 74 ],
    '7': [ 65, 66, 75 ],
    '9': [
       0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
      12, 15, 16, 17, 18, 19, 20, 21, 22, 25, 26, 27,
      28, 29, 30, 31, 37, 38, 39, 40, 47, 48, 49, 50,
      54, 58, 59, 60, 67, 68, 69, 70, 71, 77, 78, 79,
      80, 81, 82, 85, 86, 87, 88, 89, 90, 91, 92, 95,
      96, 97, 98, 99
    ]
  }

let object1 = {}
for(const [key, value] of Object.entries(a)){
    for(const item of value){
        object1[item] = key
    }
  
}


const dimension = 10;
let M = 10; 
let N = 10;

let listOfLists = [];
let index = 0;
for (let i = 0; i < M; i++) {
    let sublist = [];
    for (let j = 0; j < N; j++) {
        object1[index] ? sublist.push(object1[index]) : sublist.push(-1); // Fill with a default value, e.g., 0
        index += 1
    }
    listOfLists.push(sublist);
}


console.log(listOfLists)