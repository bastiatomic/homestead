const indexToString = {
  0: "0,12",
  1: "1,11",
  2: "1,13",
  3: "2,10",
  4: "2,12",
  5: "2,14",
  6: "3,9",
  7: "3,11",
  8: "3,13",
  9: "3,15",
  10: "4,0",
  11: "4,2",
  12: "4,4",
  13: "4,6",
  14: "4,8",
  15: "4,10",
  16: "4,12",
  17: "4,14",
  18: "4,16",
  19: "4,18",
  20: "4,20",
  21: "4,22",
  22: "4,24",
  23: "5,1",
  24: "5,3",
  25: "5,5",
  26: "5,7",
  27: "5,9",
  28: "5,11",
  29: "5,13",
  30: "5,15",
  31: "5,17",
  32: "5,19",
  33: "5,21",
  34: "5,23",
  35: "6,2",
  36: "6,4",
  37: "6,6",
  38: "6,8",
  39: "6,10",
  40: "6,12",
  41: "6,14",
  42: "6,16",
  43: "6,18",
  44: "6,20",
  45: "6,22",
  46: "7,3",
  47: "7,5",
  48: "7,7",
  49: "7,9",
  50: "7,11",
  51: "7,13",
  52: "7,15",
  53: "7,17",
  54: "7,19",
  55: "7,21",
  56: "8,4",
  57: "8,6",
  58: "8,8",
  59: "8,10",
  60: "8,12",
  61: "8,14",
  62: "8,16",
  63: "8,18",
  64: "8,20",
  65: "9,3",
  66: "9,5",
  67: "9,7",
  68: "9,9",
  69: "9,11",
  70: "9,13",
  71: "9,15",
  72: "9,17",
  73: "9,19",
  74: "9,21",
  75: "10,2",
  76: "10,4",
  77: "10,6",
  78: "10,8",
  79: "10,10",
  80: "10,12",
  81: "10,14",
  82: "10,16",
  83: "10,18",
  84: "10,20",
  85: "10,22",
  86: "11,1",
  87: "11,3",
  88: "11,5",
  89: "11,7",
  90: "11,9",
  91: "11,11",
  92: "11,13",
  93: "11,15",
  94: "11,17",
  95: "11,19",
  96: "11,21",
  97: "11,23",
  98: "12,0",
  99: "12,2",
  100: "12,4",
  101: "12,6",
  102: "12,8",
  103: "12,10",
  104: "12,12",
  105: "12,14",
  106: "12,16",
  107: "12,18",
  108: "12,20",
  109: "12,22",
  110: "12,24",
  111: "13,9",
  112: "13,11",
  113: "13,13",
  114: "13,15",
  115: "14,10",
  116: "14,12",
  117: "14,14",
  118: "15,11",
  119: "15,13",
  120: "16,12",
};

const stringToIndex = {
  "0,12": 0,
  "1,11": 1,
  "1,13": 2,
  "2,10": 3,
  "2,12": 4,
  "2,14": 5,
  "3,9": 6,
  "3,11": 7,
  "3,13": 8,
  "3,15": 9,
  "4,0": 10,
  "4,2": 11,
  "4,4": 12,
  "4,6": 13,
  "4,8": 14,
  "4,10": 15,
  "4,12": 16,
  "4,14": 17,
  "4,16": 18,
  "4,18": 19,
  "4,20": 20,
  "4,22": 21,
  "4,24": 22,
  "5,1": 23,
  "5,3": 24,
  "5,5": 25,
  "5,7": 26,
  "5,9": 27,
  "5,11": 28,
  "5,13": 29,
  "5,15": 30,
  "5,17": 31,
  "5,19": 32,
  "5,21": 33,
  "5,23": 34,
  "6,2": 35,
  "6,4": 36,
  "6,6": 37,
  "6,8": 38,
  "6,10": 39,
  "6,12": 40,
  "6,14": 41,
  "6,16": 42,
  "6,18": 43,
  "6,20": 44,
  "6,22": 45,
  "7,3": 46,
  "7,5": 47,
  "7,7": 48,
  "7,9": 49,
  "7,11": 50,
  "7,13": 51,
  "7,15": 52,
  "7,17": 53,
  "7,19": 54,
  "7,21": 55,
  "8,4": 56,
  "8,6": 57,
  "8,8": 58,
  "8,10": 59,
  "8,12": 60,
  "8,14": 61,
  "8,16": 62,
  "8,18": 63,
  "8,20": 64,
  "9,3": 65,
  "9,5": 66,
  "9,7": 67,
  "9,9": 68,
  "9,11": 69,
  "9,13": 70,
  "9,15": 71,
  "9,17": 72,
  "9,19": 73,
  "9,21": 74,
  "10,2": 75,
  "10,4": 76,
  "10,6": 77,
  "10,8": 78,
  "10,10": 79,
  "10,12": 80,
  "10,14": 81,
  "10,16": 82,
  "10,18": 83,
  "10,20": 84,
  "10,22": 85,
  "11,1": 86,
  "11,3": 87,
  "11,5": 88,
  "11,7": 89,
  "11,9": 90,
  "11,11": 91,
  "11,13": 92,
  "11,15": 93,
  "11,17": 94,
  "11,19": 95,
  "11,21": 96,
  "11,23": 97,
  "12,0": 98,
  "12,2": 99,
  "12,4": 100,
  "12,6": 101,
  "12,8": 102,
  "12,10": 103,
  "12,12": 104,
  "12,14": 105,
  "12,16": 106,
  "12,18": 107,
  "12,20": 108,
  "12,22": 109,
  "12,24": 110,
  "13,9": 111,
  "13,11": 112,
  "13,13": 113,
  "13,15": 114,
  "14,10": 115,
  "14,12": 116,
  "14,14": 117,
  "15,11": 118,
  "15,13": 119,
  "16,12": 120,
};

/**
 * 1. loop over all indice (0 => 120)
 *
 */

/**
 *  for (const neighborIndex of [
        [rowIndex - 1, columnIndex + 1],
        [rowIndex + 0, columnIndex - 2],
        [rowIndex - 1, columnIndex - 1],
        [rowIndex + 1, columnIndex + 1],
        [rowIndex + 0, columnIndex + 2],
        [rowIndex + 1, columnIndex - 1],
      ])
 */

/**
 * goal: find all possible double jumps
 */

/**
 * neighbors = [[-1, 1], [0, -2], [-1, -1], [1, 1], [0, 2], [1, -1]]
 * jumpDestinations = [[-2, 2], [0, -4], [-2, -2], [2, 2], [0, 4], [2, -2]]
 * ATTENTION: Both must exist in the board
 */

let jumpTargetLocations = {};

const neighbors = [
  [-1, 1],
  [0, -2],
  [-1, -1],
  [1, 1],
  [0, 2],
  [1, -1],
];
const jumpDestinations = [
  [-2, 2],
  [0, -4],
  [-2, -2],
  [2, 2],
  [0, 4],
  [2, -2],
];

//loop over all indice
for (let i = 0; i < 121; i++) {
  jumpTargetLocations[i] = [];
  const currentMarbleStringLocation = indexToString[i];

  const [rowIndex, columnIndex] = currentMarbleStringLocation
    .split(",")
    .map(Number);

  for (const [index, value] of jumpDestinations.entries()) {
    const newX = rowIndex + value[0];
    const newY = columnIndex + value[1];
    const newTargetLocationString = newX + "," + newY; //STRING

    if (stringToIndex[newTargetLocationString]) {
      jumpTargetLocations[i].push({
        newTargetLocationString: stringToIndex[newTargetLocationString],
        newNeighbor:
          stringToIndex[
            rowIndex +
              neighbors[index][0] +
              "," +
              (columnIndex + neighbors[index][1])
          ],
      });
    }
  }
}

console.log(jumpTargetLocations);
