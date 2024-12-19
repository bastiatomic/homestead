let a = {
    0: [9, 10, 18,19,24,25,32,20,21,26,27],
    1: [2],
    8: [28],
    7: [6, 12],
    3: [8, 7, 14, 13],
    4: [15, 16],
    5: [20,21,26,27],
    6: [22],
}

let object1 = {}
for(const [key, value] of Object.entries(a)){
    for(const item of value){
        object1[item] = key
    }
  
}


const dimension = 6;
let M = 6; 
let N = 6;

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