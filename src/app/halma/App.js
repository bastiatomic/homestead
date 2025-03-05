/**
 * This document is used to generate the neighbors of each tile in the board.
 * Plan: Generate the nodes [] to get each  attribute (x,y, neighbor, targetNeighbor) of each node
 */
const stringToIndex2 = {
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

const pixelLocations2 = {
  0: { left: 176.47058823529412, top: 100 },
  1: { left: 161.76470588235296, top: 126.47058823529412 },
  2: { left: 191.1764705882353, top: 126.47058823529412 },
  3: { left: 147.05882352941177, top: 152.94117647058823 },
  4: { left: 176.47058823529412, top: 152.94117647058823 },
  5: { left: 205.88235294117646, top: 152.94117647058823 },
  6: { left: 132.35294117647058, top: 179.41176470588235 },
  7: { left: 161.76470588235296, top: 179.41176470588235 },
  8: { left: 191.1764705882353, top: 179.41176470588235 },
  9: { left: 220.58823529411765, top: 179.41176470588235 },
  10: { left: 0, top: 205.88235294117646 },
  11: { left: 29.411764705882355, top: 205.88235294117646 },
  12: { left: 58.82352941176471, top: 205.88235294117646 },
  13: { left: 88.23529411764706, top: 205.88235294117646 },
  14: { left: 117.64705882352942, top: 205.88235294117646 },
  15: { left: 147.05882352941177, top: 205.88235294117646 },
  16: { left: 176.47058823529412, top: 205.88235294117646 },
  17: { left: 205.88235294117646, top: 205.88235294117646 },
  18: { left: 235.29411764705884, top: 205.88235294117646 },
  19: { left: 264.70588235294116, top: 205.88235294117646 },
  20: { left: 294.11764705882354, top: 205.88235294117646 },
  21: { left: 323.5294117647059, top: 205.88235294117646 },
  22: { left: 352.94117647058823, top: 205.88235294117646 },
  23: { left: 14.705882352941178, top: 232.35294117647058 },
  24: { left: 44.11764705882353, top: 232.35294117647058 },
  25: { left: 73.52941176470588, top: 232.35294117647058 },
  26: { left: 102.94117647058823, top: 232.35294117647058 },
  27: { left: 132.35294117647058, top: 232.35294117647058 },
  28: { left: 161.76470588235296, top: 232.35294117647058 },
  29: { left: 191.1764705882353, top: 232.35294117647058 },
  30: { left: 220.58823529411765, top: 232.35294117647058 },
  31: { left: 250, top: 232.35294117647058 },
  32: { left: 279.4117647058824, top: 232.35294117647058 },
  33: { left: 308.8235294117647, top: 232.35294117647058 },
  34: { left: 338.2352941176471, top: 232.35294117647058 },
  35: { left: 29.411764705882355, top: 258.8235294117647 },
  36: { left: 58.82352941176471, top: 258.8235294117647 },
  37: { left: 88.23529411764706, top: 258.8235294117647 },
  38: { left: 117.64705882352942, top: 258.8235294117647 },
  39: { left: 147.05882352941177, top: 258.8235294117647 },
  40: { left: 176.47058823529412, top: 258.8235294117647 },
  41: { left: 205.88235294117646, top: 258.8235294117647 },
  42: { left: 235.29411764705884, top: 258.8235294117647 },
  43: { left: 264.70588235294116, top: 258.8235294117647 },
  44: { left: 294.11764705882354, top: 258.8235294117647 },
  45: { left: 323.5294117647059, top: 258.8235294117647 },
  46: { left: 44.11764705882353, top: 285.29411764705884 },
  47: { left: 73.52941176470588, top: 285.29411764705884 },
  48: { left: 102.94117647058823, top: 285.29411764705884 },
  49: { left: 132.35294117647058, top: 285.29411764705884 },
  50: { left: 161.76470588235296, top: 285.29411764705884 },
  51: { left: 191.1764705882353, top: 285.29411764705884 },
  52: { left: 220.58823529411765, top: 285.29411764705884 },
  53: { left: 250, top: 285.29411764705884 },
  54: { left: 279.4117647058824, top: 285.29411764705884 },
  55: { left: 308.8235294117647, top: 285.29411764705884 },
  56: { left: 58.82352941176471, top: 311.7647058823529 },
  57: { left: 88.23529411764706, top: 311.7647058823529 },
  58: { left: 117.64705882352942, top: 311.7647058823529 },
  59: { left: 147.05882352941177, top: 311.7647058823529 },
  60: { left: 176.47058823529412, top: 311.7647058823529 },
  61: { left: 205.88235294117646, top: 311.7647058823529 },
  62: { left: 235.29411764705884, top: 311.7647058823529 },
  63: { left: 264.70588235294116, top: 311.7647058823529 },
  64: { left: 294.11764705882354, top: 311.7647058823529 },
  65: { left: 44.11764705882353, top: 338.2352941176471 },
  66: { left: 73.52941176470588, top: 338.2352941176471 },
  67: { left: 102.94117647058823, top: 338.2352941176471 },
  68: { left: 132.35294117647058, top: 338.2352941176471 },
  69: { left: 161.76470588235296, top: 338.2352941176471 },
  70: { left: 191.1764705882353, top: 338.2352941176471 },
  71: { left: 220.58823529411765, top: 338.2352941176471 },
  72: { left: 250, top: 338.2352941176471 },
  73: { left: 279.4117647058824, top: 338.2352941176471 },
  74: { left: 308.8235294117647, top: 338.2352941176471 },
  75: { left: 29.411764705882355, top: 364.70588235294116 },
  76: { left: 58.82352941176471, top: 364.70588235294116 },
  77: { left: 88.23529411764706, top: 364.70588235294116 },
  78: { left: 117.64705882352942, top: 364.70588235294116 },
  79: { left: 147.05882352941177, top: 364.70588235294116 },
  80: { left: 176.47058823529412, top: 364.70588235294116 },
  81: { left: 205.88235294117646, top: 364.70588235294116 },
  82: { left: 235.29411764705884, top: 364.70588235294116 },
  83: { left: 264.70588235294116, top: 364.70588235294116 },
  84: { left: 294.11764705882354, top: 364.70588235294116 },
  85: { left: 323.5294117647059, top: 364.70588235294116 },
  86: { left: 14.705882352941178, top: 391.1764705882353 },
  87: { left: 44.11764705882353, top: 391.1764705882353 },
  88: { left: 73.52941176470588, top: 391.1764705882353 },
  89: { left: 102.94117647058823, top: 391.1764705882353 },
  90: { left: 132.35294117647058, top: 391.1764705882353 },
  91: { left: 161.76470588235296, top: 391.1764705882353 },
  92: { left: 191.1764705882353, top: 391.1764705882353 },
  93: { left: 220.58823529411765, top: 391.1764705882353 },
  94: { left: 250, top: 391.1764705882353 },
  95: { left: 279.4117647058824, top: 391.1764705882353 },
  96: { left: 308.8235294117647, top: 391.1764705882353 },
  97: { left: 338.2352941176471, top: 391.1764705882353 },
  98: { left: 0, top: 417.6470588235294 },
  99: { left: 29.411764705882355, top: 417.6470588235294 },
  100: { left: 58.82352941176471, top: 417.6470588235294 },
  101: { left: 88.23529411764706, top: 417.6470588235294 },
  102: { left: 117.64705882352942, top: 417.6470588235294 },
  103: { left: 147.05882352941177, top: 417.6470588235294 },
  104: { left: 176.47058823529412, top: 417.6470588235294 },
  105: { left: 205.88235294117646, top: 417.6470588235294 },
  106: { left: 235.29411764705884, top: 417.6470588235294 },
  107: { left: 264.70588235294116, top: 417.6470588235294 },
  108: { left: 294.11764705882354, top: 417.6470588235294 },
  109: { left: 323.5294117647059, top: 417.6470588235294 },
  110: { left: 352.94117647058823, top: 417.6470588235294 },
  111: { left: 132.35294117647058, top: 444.11764705882354 },
  112: { left: 161.76470588235296, top: 444.11764705882354 },
  113: { left: 191.1764705882353, top: 444.11764705882354 },
  114: { left: 220.58823529411765, top: 444.11764705882354 },
  115: { left: 147.05882352941177, top: 470.5882352941177 },
  116: { left: 176.47058823529412, top: 470.5882352941177 },
  117: { left: 205.88235294117646, top: 470.5882352941177 },
  118: { left: 161.76470588235296, top: 497.05882352941177 },
  119: { left: 191.1764705882353, top: 497.05882352941177 },
  120: { left: 176.47058823529412, top: 523.5294117647059 },
};

const board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let tilesWithAttributes = [];

let runningIndex = 0;
board.forEach((row, rowIndex) => {
  row.forEach((value, columnIndex) => {
    if (value === 1) {
      let neighborsOfTiles = [];
      for (const neighborIndex of [
        [rowIndex - 1, columnIndex + 1],
        [rowIndex + 0, columnIndex - 2],
        [rowIndex - 1, columnIndex - 1],
        [rowIndex + 1, columnIndex + 1],
        [rowIndex + 0, columnIndex + 2],
        [rowIndex + 1, columnIndex - 1],
      ]) {
        const newX = neighborIndex[0];
        const newY = neighborIndex[1];
        if (
          newX >= 0 &&
          newX < board.length &&
          newY >= 0 &&
          newY < row.length &&
          board[newX][newY] === 1
        ) {
          neighborsOfTiles.push(stringToIndex2[newX + "," + newY]);
        }
      }
      tilesWithAttributes.push({
        x: rowIndex,
        y: columnIndex,
        neighbors: neighborsOfTiles,
        leftPixel: pixelLocations2[runningIndex].left,
        topPixel: pixelLocations2[runningIndex].top,
      });
      runningIndex++;
    }
  });
});

tilesWithAttributes.forEach((tile) => {
  console.log(tile);
});
