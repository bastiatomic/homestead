let a = [9,9,9,9,9,9,9,9,9,9,
    9,9,9,1,1,9,9,9,9,9,
    9,9,9,1,1,9,9,9,9,9,
    9,9,2,0,0,3,0,9,9,9,
    9,2,2,2,0,3,3,9,9,9,
    9,0,2,0,9,4,4,0,9,9,
    9,0,5,5,6,7,7,9,9,9,
    9,9,0,5,6,7,0,9,9,9,
    9,9,9,0,0,9,9,9,9,9,
    9,9,9,0,0,9,9,9,9,9
];
let b = {}

a.forEach((element, index) => {
    b[element]? b[element].push(index) : b[element] = [index]
});

console.log(b)