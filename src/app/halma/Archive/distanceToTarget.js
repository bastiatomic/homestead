const basicBoardSetup = [
  [2, 1],
  [0, 4, 2, 3],
  [1, 0, 5, 4],
  [1, 7, 4, 6],
  [2, 3, 1, 8, 5, 7],
  [4, 2, 9, 8],
  [3, 15, 7, 14],
  [4, 6, 3, 16, 8, 15],
  [5, 7, 4, 17, 9, 16],
  [8, 5, 18, 17],
  [23, 11],
  [10, 24, 12, 23],
  [11, 25, 13, 24],
  [12, 26, 14, 25],
  [6, 13, 27, 15, 26],
  [7, 14, 6, 28, 16, 27],
  [8, 15, 7, 29, 17, 28],
  [9, 16, 8, 30, 18, 29],
  [17, 9, 31, 19, 30],
  [18, 32, 20, 31],
  [19, 33, 21, 32],
  [20, 34, 22, 33],
  [21, 34],
  [11, 10, 35, 24],
  [12, 23, 11, 36, 25, 35],
  [13, 24, 12, 37, 26, 36],
  [14, 25, 13, 38, 27, 37],
  [15, 26, 14, 39, 28, 38],
  [16, 27, 15, 40, 29, 39],
  [17, 28, 16, 41, 30, 40],
  [18, 29, 17, 42, 31, 41],
  [19, 30, 18, 43, 32, 42],
  [20, 31, 19, 44, 33, 43],
  [21, 32, 20, 45, 34, 44],
  [22, 33, 21, 45],
  [24, 23, 46, 36],
  [25, 35, 24, 47, 37, 46],
  [26, 36, 25, 48, 38, 47],
  [27, 37, 26, 49, 39, 48],
  [28, 38, 27, 50, 40, 49],
  [29, 39, 28, 51, 41, 50],
  [30, 40, 29, 52, 42, 51],
  [31, 41, 30, 53, 43, 52],
  [32, 42, 31, 54, 44, 53],
  [33, 43, 32, 55, 45, 54],
  [34, 44, 33, 55],
  [36, 35, 56, 47],
  [37, 46, 36, 57, 48, 56],
  [38, 47, 37, 58, 49, 57],
  [39, 48, 38, 59, 50, 58],
  [40, 49, 39, 60, 51, 59],
  [41, 50, 40, 61, 52, 60],
  [42, 51, 41, 62, 53, 61],
  [43, 52, 42, 63, 54, 62],
  [44, 53, 43, 64, 55, 63],
  [45, 54, 44, 64],
  [47, 46, 66, 57, 65],
  [48, 56, 47, 67, 58, 66],
  [49, 57, 48, 68, 59, 67],
  [50, 58, 49, 69, 60, 68],
  [51, 59, 50, 70, 61, 69],
  [52, 60, 51, 71, 62, 70],
  [53, 61, 52, 72, 63, 71],
  [54, 62, 53, 73, 64, 72],
  [55, 63, 54, 74, 73],
  [56, 76, 66, 75],
  [57, 65, 56, 77, 67, 76],
  [58, 66, 57, 78, 68, 77],
  [59, 67, 58, 79, 69, 78],
  [60, 68, 59, 80, 70, 79],
  [61, 69, 60, 81, 71, 80],
  [62, 70, 61, 82, 72, 81],
  [63, 71, 62, 83, 73, 82],
  [64, 72, 63, 84, 74, 83],
  [73, 64, 85, 84],
  [65, 87, 76, 86],
  [66, 75, 65, 88, 77, 87],
  [67, 76, 66, 89, 78, 88],
  [68, 77, 67, 90, 79, 89],
  [69, 78, 68, 91, 80, 90],
  [70, 79, 69, 92, 81, 91],
  [71, 80, 70, 93, 82, 92],
  [72, 81, 71, 94, 83, 93],
  [73, 82, 72, 95, 84, 94],
  [74, 83, 73, 96, 85, 95],
  [84, 74, 97, 96],
  [75, 99, 87, 98],
  [76, 86, 75, 100, 88, 99],
  [77, 87, 76, 101, 89, 100],
  [78, 88, 77, 102, 90, 101],
  [79, 89, 78, 103, 91, 102],
  [80, 90, 79, 104, 92, 103],
  [81, 91, 80, 105, 93, 104],
  [82, 92, 81, 106, 94, 105],
  [83, 93, 82, 107, 95, 106],
  [84, 94, 83, 108, 96, 107],
  [85, 95, 84, 109, 97, 108],
  [96, 85, 110, 109],
  [86, 99],
  [87, 98, 86, 100],
  [88, 99, 87, 101],
  [89, 100, 88, 102],
  [90, 101, 89, 111, 103],
  [91, 102, 90, 112, 104, 111],
  [92, 103, 91, 113, 105, 112],
  [93, 104, 92, 114, 106, 113],
  [94, 105, 93, 107, 114],
  [95, 106, 94, 108],
  [96, 107, 95, 109],
  [97, 108, 96, 110],
  [109, 97],
  [103, 102, 115, 112],
  [104, 111, 103, 116, 113, 115],
  [105, 112, 104, 117, 114, 116],
  [106, 113, 105, 117],
  [112, 111, 118, 116],
  [113, 115, 112, 119, 117, 118],
  [114, 116, 113, 119],
  [116, 115, 120, 119],
  [117, 118, 116, 120],
  [119, 118],
];

//cconstruct an object with distance to each targetNode 120, 98, 10, 0, 22, 110,

/**
 * loop over all basicBoardSetup indice
 * grab an item
 * make distance = 1
 * loop over each neighbors and mark distance = 2, loop over these neighbors and so on and mark distance ++
 * if targetNode was found, store distance as shorest distance. I dont need the path; just a number
 *
 * Do this with all targetNodes and all basicBoardSetupNodes => goal: from every node to each of the targetNodes
 */

function calculateDistances(board, targetIndex) {
    
    let queue = [targetIndex];  // Start BFS from the target
    let distances = new Array(board.length).fill(Infinity); // Initialize distances to Infinity
    distances[targetIndex] = 0;  // Distance from target to itself is 0

    while (queue.length > 0) {
        let current = queue.shift();
        let currentDistance = distances[current];

        // Process all neighbors
        for (let neighbor of board[current]) {
            if (distances[neighbor] === Infinity) { // If not visited
                distances[neighbor] = currentDistance + 1;
                queue.push(neighbor);
            }
        }
    }

    return distances;
}

// Example usage:
const targetIndice = [120, 98, 10, 0, 22, 110]; // Change this to your desired target
const distances = calculateDistances(basicBoardSetup, targetIndex);
console.log(distances);

let distanceToTargetObject = {
    120:  calculateDistances(basicBoardSetup, 120),
    98:  calculateDistances(basicBoardSetup, 98),
    10:  calculateDistances(basicBoardSetup, 10),
    0:  calculateDistances(basicBoardSetup, 0),
    22:  calculateDistances(basicBoardSetup, 22),
    110:  calculateDistances(basicBoardSetup, 110),
}