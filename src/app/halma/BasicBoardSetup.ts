export const basicBoardSetup: {
  x: number;
  y: number;
  neighbors: number[];
  leftPixel: number;
  topPixel: number;
}[] = [
  {
    x: 0,
    y: 12,
    neighbors: [2, 1],
    leftPixel: 176.47058823529412,
    topPixel: 0,
  },
  {
    x: 1,
    y: 11,
    neighbors: [0, 4, 2, 3],
    leftPixel: 161.76470588235296,
    topPixel: 26.470588235294116,
  },
  {
    x: 1,
    y: 13,
    neighbors: [1, 0, 5, 4],
    leftPixel: 191.1764705882353,
    topPixel: 26.470588235294116,
  },
  {
    x: 2,
    y: 10,
    neighbors: [1, 7, 4, 6],
    leftPixel: 147.05882352941177,
    topPixel: 52.94117647058823,
  },
  {
    x: 2,
    y: 12,
    neighbors: [2, 3, 1, 8, 5, 7],
    leftPixel: 176.47058823529412,
    topPixel: 52.94117647058823,
  },
  {
    x: 2,
    y: 14,
    neighbors: [4, 2, 9, 8],
    leftPixel: 205.88235294117646,
    topPixel: 52.94117647058823,
  },
  {
    x: 3,
    y: 9,
    neighbors: [3, 15, 7, 14],
    leftPixel: 132.35294117647058,
    topPixel: 79.41176470588235,
  },
  {
    x: 3,
    y: 11,
    neighbors: [4, 6, 3, 16, 8, 15],
    leftPixel: 161.76470588235296,
    topPixel: 79.41176470588235,
  },
  {
    x: 3,
    y: 13,
    neighbors: [5, 7, 4, 17, 9, 16],
    leftPixel: 191.1764705882353,
    topPixel: 79.41176470588235,
  },
  {
    x: 3,
    y: 15,
    neighbors: [8, 5, 18, 17],
    leftPixel: 220.58823529411765,
    topPixel: 79.41176470588235,
  },
  {
    x: 4,
    y: 0,
    neighbors: [23, 11],
    leftPixel: 0,
    topPixel: 105.88235294117646,
  },
  {
    x: 4,
    y: 2,
    neighbors: [10, 24, 12, 23],
    leftPixel: 29.411764705882355,
    topPixel: 105.88235294117646,
  },
  {
    x: 4,
    y: 4,
    neighbors: [11, 25, 13, 24],
    leftPixel: 58.82352941176471,
    topPixel: 105.88235294117646,
  },
  {
    x: 4,
    y: 6,
    neighbors: [12, 26, 14, 25],
    leftPixel: 88.23529411764706,
    topPixel: 105.88235294117646,
  },
  {
    x: 4,
    y: 8,
    neighbors: [6, 13, 27, 15, 26],
    leftPixel: 117.64705882352942,
    topPixel: 105.88235294117646,
  },
  {
    x: 4,
    y: 10,
    neighbors: [7, 14, 6, 28, 16, 27],
    leftPixel: 147.05882352941177,
    topPixel: 105.88235294117646,
  },
  {
    x: 4,
    y: 12,
    neighbors: [8, 15, 7, 29, 17, 28],
    leftPixel: 176.47058823529412,
    topPixel: 105.88235294117646,
  },
  {
    x: 4,
    y: 14,
    neighbors: [9, 16, 8, 30, 18, 29],
    leftPixel: 205.88235294117646,
    topPixel: 105.88235294117646,
  },
  {
    x: 4,
    y: 16,
    neighbors: [17, 9, 31, 19, 30],
    leftPixel: 235.29411764705884,
    topPixel: 105.88235294117646,
  },
  {
    x: 4,
    y: 18,
    neighbors: [18, 32, 20, 31],
    leftPixel: 264.70588235294116,
    topPixel: 105.88235294117646,
  },
  {
    x: 4,
    y: 20,
    neighbors: [19, 33, 21, 32],
    leftPixel: 294.11764705882354,
    topPixel: 105.88235294117646,
  },
  {
    x: 4,
    y: 22,
    neighbors: [20, 34, 22, 33],
    leftPixel: 323.5294117647059,
    topPixel: 105.88235294117646,
  },
  {
    x: 4,
    y: 24,
    neighbors: [21, 34],
    leftPixel: 352.94117647058823,
    topPixel: 105.88235294117646,
  },
  {
    x: 5,
    y: 1,
    neighbors: [11, 10, 35, 24],
    leftPixel: 14.705882352941178,
    topPixel: 132.35294117647058,
  },
  {
    x: 5,
    y: 3,
    neighbors: [12, 23, 11, 36, 25, 35],
    leftPixel: 44.11764705882353,
    topPixel: 132.35294117647058,
  },
  {
    x: 5,
    y: 5,
    neighbors: [13, 24, 12, 37, 26, 36],
    leftPixel: 73.52941176470588,
    topPixel: 132.35294117647058,
  },
  {
    x: 5,
    y: 7,
    neighbors: [14, 25, 13, 38, 27, 37],
    leftPixel: 102.94117647058823,
    topPixel: 132.35294117647058,
  },
  {
    x: 5,
    y: 9,
    neighbors: [15, 26, 14, 39, 28, 38],
    leftPixel: 132.35294117647058,
    topPixel: 132.35294117647058,
  },
  {
    x: 5,
    y: 11,
    neighbors: [16, 27, 15, 40, 29, 39],
    leftPixel: 161.76470588235296,
    topPixel: 132.35294117647058,
  },
  {
    x: 5,
    y: 13,
    neighbors: [17, 28, 16, 41, 30, 40],
    leftPixel: 191.1764705882353,
    topPixel: 132.35294117647058,
  },
  {
    x: 5,
    y: 15,
    neighbors: [18, 29, 17, 42, 31, 41],
    leftPixel: 220.58823529411765,
    topPixel: 132.35294117647058,
  },
  {
    x: 5,
    y: 17,
    neighbors: [19, 30, 18, 43, 32, 42],
    leftPixel: 250,
    topPixel: 132.35294117647058,
  },
  {
    x: 5,
    y: 19,
    neighbors: [20, 31, 19, 44, 33, 43],
    leftPixel: 279.4117647058824,
    topPixel: 132.35294117647058,
  },
  {
    x: 5,
    y: 21,
    neighbors: [21, 32, 20, 45, 34, 44],
    leftPixel: 308.8235294117647,
    topPixel: 132.35294117647058,
  },
  {
    x: 5,
    y: 23,
    neighbors: [22, 33, 21, 45],
    leftPixel: 338.2352941176471,
    topPixel: 132.35294117647058,
  },
  {
    x: 6,
    y: 2,
    neighbors: [24, 23, 46, 36],
    leftPixel: 29.411764705882355,
    topPixel: 158.8235294117647,
  },
  {
    x: 6,
    y: 4,
    neighbors: [25, 35, 24, 47, 37, 46],
    leftPixel: 58.82352941176471,
    topPixel: 158.8235294117647,
  },
  {
    x: 6,
    y: 6,
    neighbors: [26, 36, 25, 48, 38, 47],
    leftPixel: 88.23529411764706,
    topPixel: 158.8235294117647,
  },
  {
    x: 6,
    y: 8,
    neighbors: [27, 37, 26, 49, 39, 48],
    leftPixel: 117.64705882352942,
    topPixel: 158.8235294117647,
  },
  {
    x: 6,
    y: 10,
    neighbors: [28, 38, 27, 50, 40, 49],
    leftPixel: 147.05882352941177,
    topPixel: 158.8235294117647,
  },
  {
    x: 6,
    y: 12,
    neighbors: [29, 39, 28, 51, 41, 50],
    leftPixel: 176.47058823529412,
    topPixel: 158.8235294117647,
  },
  {
    x: 6,
    y: 14,
    neighbors: [30, 40, 29, 52, 42, 51],
    leftPixel: 205.88235294117646,
    topPixel: 158.8235294117647,
  },
  {
    x: 6,
    y: 16,
    neighbors: [31, 41, 30, 53, 43, 52],
    leftPixel: 235.29411764705884,
    topPixel: 158.8235294117647,
  },
  {
    x: 6,
    y: 18,
    neighbors: [32, 42, 31, 54, 44, 53],
    leftPixel: 264.70588235294116,
    topPixel: 158.8235294117647,
  },
  {
    x: 6,
    y: 20,
    neighbors: [33, 43, 32, 55, 45, 54],
    leftPixel: 294.11764705882354,
    topPixel: 158.8235294117647,
  },
  {
    x: 6,
    y: 22,
    neighbors: [34, 44, 33, 55],
    leftPixel: 323.5294117647059,
    topPixel: 158.8235294117647,
  },
  {
    x: 7,
    y: 3,
    neighbors: [36, 35, 56, 47],
    leftPixel: 44.11764705882353,
    topPixel: 185.29411764705884,
  },
  {
    x: 7,
    y: 5,
    neighbors: [37, 46, 36, 57, 48, 56],
    leftPixel: 73.52941176470588,
    topPixel: 185.29411764705884,
  },
  {
    x: 7,
    y: 7,
    neighbors: [38, 47, 37, 58, 49, 57],
    leftPixel: 102.94117647058823,
    topPixel: 185.29411764705884,
  },
  {
    x: 7,
    y: 9,
    neighbors: [39, 48, 38, 59, 50, 58],
    leftPixel: 132.35294117647058,
    topPixel: 185.29411764705884,
  },
  {
    x: 7,
    y: 11,
    neighbors: [40, 49, 39, 60, 51, 59],
    leftPixel: 161.76470588235296,
    topPixel: 185.29411764705884,
  },
  {
    x: 7,
    y: 13,
    neighbors: [41, 50, 40, 61, 52, 60],
    leftPixel: 191.1764705882353,
    topPixel: 185.29411764705884,
  },
  {
    x: 7,
    y: 15,
    neighbors: [42, 51, 41, 62, 53, 61],
    leftPixel: 220.58823529411765,
    topPixel: 185.29411764705884,
  },
  {
    x: 7,
    y: 17,
    neighbors: [43, 52, 42, 63, 54, 62],
    leftPixel: 250,
    topPixel: 185.29411764705884,
  },
  {
    x: 7,
    y: 19,
    neighbors: [44, 53, 43, 64, 55, 63],
    leftPixel: 279.4117647058824,
    topPixel: 185.29411764705884,
  },
  {
    x: 7,
    y: 21,
    neighbors: [45, 54, 44, 64],
    leftPixel: 308.8235294117647,
    topPixel: 185.29411764705884,
  },
  {
    x: 8,
    y: 4,
    neighbors: [47, 46, 66, 57, 65],
    leftPixel: 58.82352941176471,
    topPixel: 211.76470588235293,
  },
  {
    x: 8,
    y: 6,
    neighbors: [48, 56, 47, 67, 58, 66],
    leftPixel: 88.23529411764706,
    topPixel: 211.76470588235293,
  },
  {
    x: 8,
    y: 8,
    neighbors: [49, 57, 48, 68, 59, 67],
    leftPixel: 117.64705882352942,
    topPixel: 211.76470588235293,
  },
  {
    x: 8,
    y: 10,
    neighbors: [50, 58, 49, 69, 60, 68],
    leftPixel: 147.05882352941177,
    topPixel: 211.76470588235293,
  },
  {
    x: 8,
    y: 12,
    neighbors: [51, 59, 50, 70, 61, 69],
    leftPixel: 176.47058823529412,
    topPixel: 211.76470588235293,
  },
  {
    x: 8,
    y: 14,
    neighbors: [52, 60, 51, 71, 62, 70],
    leftPixel: 205.88235294117646,
    topPixel: 211.76470588235293,
  },
  {
    x: 8,
    y: 16,
    neighbors: [53, 61, 52, 72, 63, 71],
    leftPixel: 235.29411764705884,
    topPixel: 211.76470588235293,
  },
  {
    x: 8,
    y: 18,
    neighbors: [54, 62, 53, 73, 64, 72],
    leftPixel: 264.70588235294116,
    topPixel: 211.76470588235293,
  },
  {
    x: 8,
    y: 20,
    neighbors: [55, 63, 54, 74, 73],
    leftPixel: 294.11764705882354,
    topPixel: 211.76470588235293,
  },
  {
    x: 9,
    y: 3,
    neighbors: [56, 76, 66, 75],
    leftPixel: 44.11764705882353,
    topPixel: 238.23529411764707,
  },
  {
    x: 9,
    y: 5,
    neighbors: [57, 65, 56, 77, 67, 76],
    leftPixel: 73.52941176470588,
    topPixel: 238.23529411764707,
  },
  {
    x: 9,
    y: 7,
    neighbors: [58, 66, 57, 78, 68, 77],
    leftPixel: 102.94117647058823,
    topPixel: 238.23529411764707,
  },
  {
    x: 9,
    y: 9,
    neighbors: [59, 67, 58, 79, 69, 78],
    leftPixel: 132.35294117647058,
    topPixel: 238.23529411764707,
  },
  {
    x: 9,
    y: 11,
    neighbors: [60, 68, 59, 80, 70, 79],
    leftPixel: 161.76470588235296,
    topPixel: 238.23529411764707,
  },
  {
    x: 9,
    y: 13,
    neighbors: [61, 69, 60, 81, 71, 80],
    leftPixel: 191.1764705882353,
    topPixel: 238.23529411764707,
  },
  {
    x: 9,
    y: 15,
    neighbors: [62, 70, 61, 82, 72, 81],
    leftPixel: 220.58823529411765,
    topPixel: 238.23529411764707,
  },
  {
    x: 9,
    y: 17,
    neighbors: [63, 71, 62, 83, 73, 82],
    leftPixel: 250,
    topPixel: 238.23529411764707,
  },
  {
    x: 9,
    y: 19,
    neighbors: [64, 72, 63, 84, 74, 83],
    leftPixel: 279.4117647058824,
    topPixel: 238.23529411764707,
  },
  {
    x: 9,
    y: 21,
    neighbors: [73, 64, 85, 84],
    leftPixel: 308.8235294117647,
    topPixel: 238.23529411764707,
  },
  {
    x: 10,
    y: 2,
    neighbors: [65, 87, 76, 86],
    leftPixel: 29.411764705882355,
    topPixel: 264.70588235294116,
  },
  {
    x: 10,
    y: 4,
    neighbors: [66, 75, 65, 88, 77, 87],
    leftPixel: 58.82352941176471,
    topPixel: 264.70588235294116,
  },
  {
    x: 10,
    y: 6,
    neighbors: [67, 76, 66, 89, 78, 88],
    leftPixel: 88.23529411764706,
    topPixel: 264.70588235294116,
  },
  {
    x: 10,
    y: 8,
    neighbors: [68, 77, 67, 90, 79, 89],
    leftPixel: 117.64705882352942,
    topPixel: 264.70588235294116,
  },
  {
    x: 10,
    y: 10,
    neighbors: [69, 78, 68, 91, 80, 90],
    leftPixel: 147.05882352941177,
    topPixel: 264.70588235294116,
  },
  {
    x: 10,
    y: 12,
    neighbors: [70, 79, 69, 92, 81, 91],
    leftPixel: 176.47058823529412,
    topPixel: 264.70588235294116,
  },
  {
    x: 10,
    y: 14,
    neighbors: [71, 80, 70, 93, 82, 92],
    leftPixel: 205.88235294117646,
    topPixel: 264.70588235294116,
  },
  {
    x: 10,
    y: 16,
    neighbors: [72, 81, 71, 94, 83, 93],
    leftPixel: 235.29411764705884,
    topPixel: 264.70588235294116,
  },
  {
    x: 10,
    y: 18,
    neighbors: [73, 82, 72, 95, 84, 94],
    leftPixel: 264.70588235294116,
    topPixel: 264.70588235294116,
  },
  {
    x: 10,
    y: 20,
    neighbors: [74, 83, 73, 96, 85, 95],
    leftPixel: 294.11764705882354,
    topPixel: 264.70588235294116,
  },
  {
    x: 10,
    y: 22,
    neighbors: [84, 74, 97, 96],
    leftPixel: 323.5294117647059,
    topPixel: 264.70588235294116,
  },
  {
    x: 11,
    y: 1,
    neighbors: [75, 99, 87, 98],
    leftPixel: 14.705882352941178,
    topPixel: 291.1764705882353,
  },
  {
    x: 11,
    y: 3,
    neighbors: [76, 86, 75, 100, 88, 99],
    leftPixel: 44.11764705882353,
    topPixel: 291.1764705882353,
  },
  {
    x: 11,
    y: 5,
    neighbors: [77, 87, 76, 101, 89, 100],
    leftPixel: 73.52941176470588,
    topPixel: 291.1764705882353,
  },
  {
    x: 11,
    y: 7,
    neighbors: [78, 88, 77, 102, 90, 101],
    leftPixel: 102.94117647058823,
    topPixel: 291.1764705882353,
  },
  {
    x: 11,
    y: 9,
    neighbors: [79, 89, 78, 103, 91, 102],
    leftPixel: 132.35294117647058,
    topPixel: 291.1764705882353,
  },
  {
    x: 11,
    y: 11,
    neighbors: [80, 90, 79, 104, 92, 103],
    leftPixel: 161.76470588235296,
    topPixel: 291.1764705882353,
  },
  {
    x: 11,
    y: 13,
    neighbors: [81, 91, 80, 105, 93, 104],
    leftPixel: 191.1764705882353,
    topPixel: 291.1764705882353,
  },
  {
    x: 11,
    y: 15,
    neighbors: [82, 92, 81, 106, 94, 105],
    leftPixel: 220.58823529411765,
    topPixel: 291.1764705882353,
  },
  {
    x: 11,
    y: 17,
    neighbors: [83, 93, 82, 107, 95, 106],
    leftPixel: 250,
    topPixel: 291.1764705882353,
  },
  {
    x: 11,
    y: 19,
    neighbors: [84, 94, 83, 108, 96, 107],
    leftPixel: 279.4117647058824,
    topPixel: 291.1764705882353,
  },
  {
    x: 11,
    y: 21,
    neighbors: [85, 95, 84, 109, 97, 108],
    leftPixel: 308.8235294117647,
    topPixel: 291.1764705882353,
  },
  {
    x: 11,
    y: 23,
    neighbors: [96, 85, 110, 109],
    leftPixel: 338.2352941176471,
    topPixel: 291.1764705882353,
  },
  {
    x: 12,
    y: 0,
    neighbors: [86, 99],
    leftPixel: 0,
    topPixel: 317.6470588235294,
  },
  {
    x: 12,
    y: 2,
    neighbors: [87, 98, 86, 100],
    leftPixel: 29.411764705882355,
    topPixel: 317.6470588235294,
  },
  {
    x: 12,
    y: 4,
    neighbors: [88, 99, 87, 101],
    leftPixel: 58.82352941176471,
    topPixel: 317.6470588235294,
  },
  {
    x: 12,
    y: 6,
    neighbors: [89, 100, 88, 102],
    leftPixel: 88.23529411764706,
    topPixel: 317.6470588235294,
  },
  {
    x: 12,
    y: 8,
    neighbors: [90, 101, 89, 111, 103],
    leftPixel: 117.64705882352942,
    topPixel: 317.6470588235294,
  },
  {
    x: 12,
    y: 10,
    neighbors: [91, 102, 90, 112, 104, 111],
    leftPixel: 147.05882352941177,
    topPixel: 317.6470588235294,
  },
  {
    x: 12,
    y: 12,
    neighbors: [92, 103, 91, 113, 105, 112],
    leftPixel: 176.47058823529412,
    topPixel: 317.6470588235294,
  },
  {
    x: 12,
    y: 14,
    neighbors: [93, 104, 92, 114, 106, 113],
    leftPixel: 205.88235294117646,
    topPixel: 317.6470588235294,
  },
  {
    x: 12,
    y: 16,
    neighbors: [94, 105, 93, 107, 114],
    leftPixel: 235.29411764705884,
    topPixel: 317.6470588235294,
  },
  {
    x: 12,
    y: 18,
    neighbors: [95, 106, 94, 108],
    leftPixel: 264.70588235294116,
    topPixel: 317.6470588235294,
  },
  {
    x: 12,
    y: 20,
    neighbors: [96, 107, 95, 109],
    leftPixel: 294.11764705882354,
    topPixel: 317.6470588235294,
  },
  {
    x: 12,
    y: 22,
    neighbors: [97, 108, 96, 110],
    leftPixel: 323.5294117647059,
    topPixel: 317.6470588235294,
  },
  {
    x: 12,
    y: 24,
    neighbors: [109, 97],
    leftPixel: 352.94117647058823,
    topPixel: 317.6470588235294,
  },
  {
    x: 13,
    y: 9,
    neighbors: [103, 102, 115, 112],
    leftPixel: 132.35294117647058,
    topPixel: 344.11764705882354,
  },
  {
    x: 13,
    y: 11,
    neighbors: [104, 111, 103, 116, 113, 115],
    leftPixel: 161.76470588235296,
    topPixel: 344.11764705882354,
  },
  {
    x: 13,
    y: 13,
    neighbors: [105, 112, 104, 117, 114, 116],
    leftPixel: 191.1764705882353,
    topPixel: 344.11764705882354,
  },
  {
    x: 13,
    y: 15,
    neighbors: [106, 113, 105, 117],
    leftPixel: 220.58823529411765,
    topPixel: 344.11764705882354,
  },
  {
    x: 14,
    y: 10,
    neighbors: [112, 111, 118, 116],
    leftPixel: 147.05882352941177,
    topPixel: 370.5882352941177,
  },
  {
    x: 14,
    y: 12,
    neighbors: [113, 115, 112, 119, 117, 118],
    leftPixel: 176.47058823529412,
    topPixel: 370.5882352941177,
  },
  {
    x: 14,
    y: 14,
    neighbors: [114, 116, 113, 119],
    leftPixel: 205.88235294117646,
    topPixel: 370.5882352941177,
  },
  {
    x: 15,
    y: 11,
    neighbors: [116, 115, 120, 119],
    leftPixel: 161.76470588235296,
    topPixel: 397.05882352941177,
  },
  {
    x: 15,
    y: 13,
    neighbors: [117, 118, 116, 120],
    leftPixel: 191.1764705882353,
    topPixel: 397.05882352941177,
  },
  {
    x: 16,
    y: 12,
    neighbors: [119, 118],
    leftPixel: 176.47058823529412,
    topPixel: 423.52941176470586,
  },
];
