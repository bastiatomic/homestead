export const jumpIndice: {
  [key: number]: { targetLocation: number; neighbor: number }[];
} = {
  //every index has a list of indices that it will land if jumpable is possible

  //TODOD: ERROR!!! This list is only for jumpable moves!!! Not for all possible moves

  0: [
    { targetLocation: 5, neighbor: 2 },
    { targetLocation: 3, neighbor: 1 },
  ],
  1: [
    { targetLocation: 8, neighbor: 4 },
    { targetLocation: 6, neighbor: 3 },
  ],
  2: [
    { targetLocation: 9, neighbor: 5 },
    { targetLocation: 7, neighbor: 4 },
  ],
  3: [
    { targetLocation: 16, neighbor: 7 },
    { targetLocation: 5, neighbor: 4 },
    { targetLocation: 14, neighbor: 6 },
  ],
  4: [
    { targetLocation: 17, neighbor: 8 },
    { targetLocation: 15, neighbor: 7 },
  ],
  5: [
    { targetLocation: 3, neighbor: 4 },
    { targetLocation: 18, neighbor: 9 },
    { targetLocation: 16, neighbor: 8 },
  ],
  6: [
    { targetLocation: 1, neighbor: 3 },
    { targetLocation: 28, neighbor: 15 },
    { targetLocation: 8, neighbor: 7 },
    { targetLocation: 26, neighbor: 14 },
  ],
  7: [
    { targetLocation: 2, neighbor: 4 },
    { targetLocation: 29, neighbor: 16 },
    { targetLocation: 9, neighbor: 8 },
    { targetLocation: 27, neighbor: 15 },
  ],
  8: [
    { targetLocation: 6, neighbor: 7 },
    { targetLocation: 1, neighbor: 4 },
    { targetLocation: 30, neighbor: 17 },
    { targetLocation: 28, neighbor: 16 },
  ],
  9: [
    { targetLocation: 7, neighbor: 8 },
    { targetLocation: 2, neighbor: 5 },
    { targetLocation: 31, neighbor: 18 },
    { targetLocation: 29, neighbor: 17 },
  ],
  10: [
    { targetLocation: 35, neighbor: 23 },
    { targetLocation: 12, neighbor: 11 },
  ],
  11: [
    { targetLocation: 36, neighbor: 24 },
    { targetLocation: 13, neighbor: 12 },
  ],
  12: [
    { targetLocation: 10, neighbor: 11 },
    { targetLocation: 37, neighbor: 25 },
    { targetLocation: 14, neighbor: 13 },
    { targetLocation: 35, neighbor: 24 },
  ],
  13: [
    { targetLocation: 11, neighbor: 12 },
    { targetLocation: 38, neighbor: 26 },
    { targetLocation: 15, neighbor: 14 },
    { targetLocation: 36, neighbor: 25 },
  ],
  14: [
    { targetLocation: 3, neighbor: 6 },
    { targetLocation: 12, neighbor: 13 },
    { targetLocation: 39, neighbor: 27 },
    { targetLocation: 16, neighbor: 15 },
    { targetLocation: 37, neighbor: 26 },
  ],
  15: [
    { targetLocation: 4, neighbor: 7 },
    { targetLocation: 13, neighbor: 14 },
    { targetLocation: 40, neighbor: 28 },
    { targetLocation: 17, neighbor: 16 },
    { targetLocation: 38, neighbor: 27 },
  ],
  16: [
    { targetLocation: 5, neighbor: 8 },
    { targetLocation: 14, neighbor: 15 },
    { targetLocation: 3, neighbor: 7 },
    { targetLocation: 41, neighbor: 29 },
    { targetLocation: 18, neighbor: 17 },
    { targetLocation: 39, neighbor: 28 },
  ],
  17: [
    { targetLocation: 15, neighbor: 16 },
    { targetLocation: 4, neighbor: 8 },
    { targetLocation: 42, neighbor: 30 },
    { targetLocation: 19, neighbor: 18 },
    { targetLocation: 40, neighbor: 29 },
  ],
  18: [
    { targetLocation: 16, neighbor: 17 },
    { targetLocation: 5, neighbor: 9 },
    { targetLocation: 43, neighbor: 31 },
    { targetLocation: 20, neighbor: 19 },
    { targetLocation: 41, neighbor: 30 },
  ],
  19: [
    { targetLocation: 17, neighbor: 18 },
    { targetLocation: 44, neighbor: 32 },
    { targetLocation: 21, neighbor: 20 },
    { targetLocation: 42, neighbor: 31 },
  ],
  20: [
    { targetLocation: 18, neighbor: 19 },
    { targetLocation: 45, neighbor: 33 },
    { targetLocation: 22, neighbor: 21 },
    { targetLocation: 43, neighbor: 32 },
  ],
  21: [
    { targetLocation: 19, neighbor: 20 },
    { targetLocation: 44, neighbor: 33 },
  ],
  22: [
    { targetLocation: 20, neighbor: 21 },
    { targetLocation: 45, neighbor: 34 },
  ],
  23: [
    { targetLocation: 46, neighbor: 35 },
    { targetLocation: 25, neighbor: 24 },
  ],
  24: [
    { targetLocation: 47, neighbor: 36 },
    { targetLocation: 26, neighbor: 25 },
  ],
  25: [
    { targetLocation: 23, neighbor: 24 },
    { targetLocation: 48, neighbor: 37 },
    { targetLocation: 27, neighbor: 26 },
    { targetLocation: 46, neighbor: 36 },
  ],
  26: [
    { targetLocation: 6, neighbor: 14 },
    { targetLocation: 24, neighbor: 25 },
    { targetLocation: 49, neighbor: 38 },
    { targetLocation: 28, neighbor: 27 },
    { targetLocation: 47, neighbor: 37 },
  ],
  27: [
    { targetLocation: 7, neighbor: 15 },
    { targetLocation: 25, neighbor: 26 },
    { targetLocation: 50, neighbor: 39 },
    { targetLocation: 29, neighbor: 28 },
    { targetLocation: 48, neighbor: 38 },
  ],
  28: [
    { targetLocation: 8, neighbor: 16 },
    { targetLocation: 26, neighbor: 27 },
    { targetLocation: 6, neighbor: 15 },
    { targetLocation: 51, neighbor: 40 },
    { targetLocation: 30, neighbor: 29 },
    { targetLocation: 49, neighbor: 39 },
  ],
  29: [
    { targetLocation: 9, neighbor: 17 },
    { targetLocation: 27, neighbor: 28 },
    { targetLocation: 7, neighbor: 16 },
    { targetLocation: 52, neighbor: 41 },
    { targetLocation: 31, neighbor: 30 },
    { targetLocation: 50, neighbor: 40 },
  ],
  30: [
    { targetLocation: 28, neighbor: 29 },
    { targetLocation: 8, neighbor: 17 },
    { targetLocation: 53, neighbor: 42 },
    { targetLocation: 32, neighbor: 31 },
    { targetLocation: 51, neighbor: 41 },
  ],
  31: [
    { targetLocation: 29, neighbor: 30 },
    { targetLocation: 9, neighbor: 18 },
    { targetLocation: 54, neighbor: 43 },
    { targetLocation: 33, neighbor: 32 },
    { targetLocation: 52, neighbor: 42 },
  ],
  32: [
    { targetLocation: 30, neighbor: 31 },
    { targetLocation: 55, neighbor: 44 },
    { targetLocation: 34, neighbor: 33 },
    { targetLocation: 53, neighbor: 43 },
  ],
  33: [
    { targetLocation: 31, neighbor: 32 },
    { targetLocation: 54, neighbor: 44 },
  ],
  34: [
    { targetLocation: 32, neighbor: 33 },
    { targetLocation: 55, neighbor: 45 },
  ],
  35: [
    { targetLocation: 12, neighbor: 24 },
    { targetLocation: 10, neighbor: 23 },
    { targetLocation: 56, neighbor: 46 },
    { targetLocation: 37, neighbor: 36 },
  ],
  36: [
    { targetLocation: 13, neighbor: 25 },
    { targetLocation: 11, neighbor: 24 },
    { targetLocation: 57, neighbor: 47 },
    { targetLocation: 38, neighbor: 37 },
  ],
  37: [
    { targetLocation: 14, neighbor: 26 },
    { targetLocation: 35, neighbor: 36 },
    { targetLocation: 12, neighbor: 25 },
    { targetLocation: 58, neighbor: 48 },
    { targetLocation: 39, neighbor: 38 },
    { targetLocation: 56, neighbor: 47 },
  ],
  38: [
    { targetLocation: 15, neighbor: 27 },
    { targetLocation: 36, neighbor: 37 },
    { targetLocation: 13, neighbor: 26 },
    { targetLocation: 59, neighbor: 49 },
    { targetLocation: 40, neighbor: 39 },
    { targetLocation: 57, neighbor: 48 },
  ],
  39: [
    { targetLocation: 16, neighbor: 28 },
    { targetLocation: 37, neighbor: 38 },
    { targetLocation: 14, neighbor: 27 },
    { targetLocation: 60, neighbor: 50 },
    { targetLocation: 41, neighbor: 40 },
    { targetLocation: 58, neighbor: 49 },
  ],
  40: [
    { targetLocation: 17, neighbor: 29 },
    { targetLocation: 38, neighbor: 39 },
    { targetLocation: 15, neighbor: 28 },
    { targetLocation: 61, neighbor: 51 },
    { targetLocation: 42, neighbor: 41 },
    { targetLocation: 59, neighbor: 50 },
  ],
  41: [
    { targetLocation: 18, neighbor: 30 },
    { targetLocation: 39, neighbor: 40 },
    { targetLocation: 16, neighbor: 29 },
    { targetLocation: 62, neighbor: 52 },
    { targetLocation: 43, neighbor: 42 },
    { targetLocation: 60, neighbor: 51 },
  ],
  42: [
    { targetLocation: 19, neighbor: 31 },
    { targetLocation: 40, neighbor: 41 },
    { targetLocation: 17, neighbor: 30 },
    { targetLocation: 63, neighbor: 53 },
    { targetLocation: 44, neighbor: 43 },
    { targetLocation: 61, neighbor: 52 },
  ],
  43: [
    { targetLocation: 20, neighbor: 32 },
    { targetLocation: 41, neighbor: 42 },
    { targetLocation: 18, neighbor: 31 },
    { targetLocation: 64, neighbor: 54 },
    { targetLocation: 45, neighbor: 44 },
    { targetLocation: 62, neighbor: 53 },
  ],
  44: [
    { targetLocation: 21, neighbor: 33 },
    { targetLocation: 42, neighbor: 43 },
    { targetLocation: 19, neighbor: 32 },
    { targetLocation: 63, neighbor: 54 },
  ],
  45: [
    { targetLocation: 22, neighbor: 34 },
    { targetLocation: 43, neighbor: 44 },
    { targetLocation: 20, neighbor: 33 },
    { targetLocation: 64, neighbor: 55 },
  ],
  46: [
    { targetLocation: 25, neighbor: 36 },
    { targetLocation: 23, neighbor: 35 },
    { targetLocation: 66, neighbor: 56 },
    { targetLocation: 48, neighbor: 47 },
  ],
  47: [
    { targetLocation: 26, neighbor: 37 },
    { targetLocation: 24, neighbor: 36 },
    { targetLocation: 67, neighbor: 57 },
    { targetLocation: 49, neighbor: 48 },
    { targetLocation: 65, neighbor: 56 },
  ],
  48: [
    { targetLocation: 27, neighbor: 38 },
    { targetLocation: 46, neighbor: 47 },
    { targetLocation: 25, neighbor: 37 },
    { targetLocation: 68, neighbor: 58 },
    { targetLocation: 50, neighbor: 49 },
    { targetLocation: 66, neighbor: 57 },
  ],
  49: [
    { targetLocation: 28, neighbor: 39 },
    { targetLocation: 47, neighbor: 48 },
    { targetLocation: 26, neighbor: 38 },
    { targetLocation: 69, neighbor: 59 },
    { targetLocation: 51, neighbor: 50 },
    { targetLocation: 67, neighbor: 58 },
  ],
  50: [
    { targetLocation: 29, neighbor: 40 },
    { targetLocation: 48, neighbor: 49 },
    { targetLocation: 27, neighbor: 39 },
    { targetLocation: 70, neighbor: 60 },
    { targetLocation: 52, neighbor: 51 },
    { targetLocation: 68, neighbor: 59 },
  ],
  51: [
    { targetLocation: 30, neighbor: 41 },
    { targetLocation: 49, neighbor: 50 },
    { targetLocation: 28, neighbor: 40 },
    { targetLocation: 71, neighbor: 61 },
    { targetLocation: 53, neighbor: 52 },
    { targetLocation: 69, neighbor: 60 },
  ],
  52: [
    { targetLocation: 31, neighbor: 42 },
    { targetLocation: 50, neighbor: 51 },
    { targetLocation: 29, neighbor: 41 },
    { targetLocation: 72, neighbor: 62 },
    { targetLocation: 54, neighbor: 53 },
    { targetLocation: 70, neighbor: 61 },
  ],
  53: [
    { targetLocation: 32, neighbor: 43 },
    { targetLocation: 51, neighbor: 52 },
    { targetLocation: 30, neighbor: 42 },
    { targetLocation: 73, neighbor: 63 },
    { targetLocation: 55, neighbor: 54 },
    { targetLocation: 71, neighbor: 62 },
  ],
  54: [
    { targetLocation: 33, neighbor: 44 },
    { targetLocation: 52, neighbor: 53 },
    { targetLocation: 31, neighbor: 43 },
    { targetLocation: 74, neighbor: 64 },
    { targetLocation: 72, neighbor: 63 },
  ],
  55: [
    { targetLocation: 34, neighbor: 45 },
    { targetLocation: 53, neighbor: 54 },
    { targetLocation: 32, neighbor: 44 },
    { targetLocation: 73, neighbor: 64 },
  ],
  56: [
    { targetLocation: 37, neighbor: 47 },
    { targetLocation: 35, neighbor: 46 },
    { targetLocation: 77, neighbor: 66 },
    { targetLocation: 58, neighbor: 57 },
    { targetLocation: 75, neighbor: 65 },
  ],
  57: [
    { targetLocation: 38, neighbor: 48 },
    { targetLocation: 36, neighbor: 47 },
    { targetLocation: 78, neighbor: 67 },
    { targetLocation: 59, neighbor: 58 },
    { targetLocation: 76, neighbor: 66 },
  ],
  58: [
    { targetLocation: 39, neighbor: 49 },
    { targetLocation: 56, neighbor: 57 },
    { targetLocation: 37, neighbor: 48 },
    { targetLocation: 79, neighbor: 68 },
    { targetLocation: 60, neighbor: 59 },
    { targetLocation: 77, neighbor: 67 },
  ],
  59: [
    { targetLocation: 40, neighbor: 50 },
    { targetLocation: 57, neighbor: 58 },
    { targetLocation: 38, neighbor: 49 },
    { targetLocation: 80, neighbor: 69 },
    { targetLocation: 61, neighbor: 60 },
    { targetLocation: 78, neighbor: 68 },
  ],
  60: [
    { targetLocation: 41, neighbor: 51 },
    { targetLocation: 58, neighbor: 59 },
    { targetLocation: 39, neighbor: 50 },
    { targetLocation: 81, neighbor: 70 },
    { targetLocation: 62, neighbor: 61 },
    { targetLocation: 79, neighbor: 69 },
  ],
  61: [
    { targetLocation: 42, neighbor: 52 },
    { targetLocation: 59, neighbor: 60 },
    { targetLocation: 40, neighbor: 51 },
    { targetLocation: 82, neighbor: 71 },
    { targetLocation: 63, neighbor: 62 },
    { targetLocation: 80, neighbor: 70 },
  ],
  62: [
    { targetLocation: 43, neighbor: 53 },
    { targetLocation: 60, neighbor: 61 },
    { targetLocation: 41, neighbor: 52 },
    { targetLocation: 83, neighbor: 72 },
    { targetLocation: 64, neighbor: 63 },
    { targetLocation: 81, neighbor: 71 },
  ],
  63: [
    { targetLocation: 44, neighbor: 54 },
    { targetLocation: 61, neighbor: 62 },
    { targetLocation: 42, neighbor: 53 },
    { targetLocation: 84, neighbor: 73 },
    { targetLocation: 82, neighbor: 72 },
  ],
  64: [
    { targetLocation: 45, neighbor: 55 },
    { targetLocation: 62, neighbor: 63 },
    { targetLocation: 43, neighbor: 54 },
    { targetLocation: 85, neighbor: 74 },
    { targetLocation: 83, neighbor: 73 },
  ],
  65: [
    { targetLocation: 47, neighbor: 56 },
    { targetLocation: 88, neighbor: 76 },
    { targetLocation: 67, neighbor: 66 },
    { targetLocation: 86, neighbor: 75 },
  ],
  66: [
    { targetLocation: 48, neighbor: 57 },
    { targetLocation: 46, neighbor: 56 },
    { targetLocation: 89, neighbor: 77 },
    { targetLocation: 68, neighbor: 67 },
    { targetLocation: 87, neighbor: 76 },
  ],
  67: [
    { targetLocation: 49, neighbor: 58 },
    { targetLocation: 65, neighbor: 66 },
    { targetLocation: 47, neighbor: 57 },
    { targetLocation: 90, neighbor: 78 },
    { targetLocation: 69, neighbor: 68 },
    { targetLocation: 88, neighbor: 77 },
  ],
  68: [
    { targetLocation: 50, neighbor: 59 },
    { targetLocation: 66, neighbor: 67 },
    { targetLocation: 48, neighbor: 58 },
    { targetLocation: 91, neighbor: 79 },
    { targetLocation: 70, neighbor: 69 },
    { targetLocation: 89, neighbor: 78 },
  ],
  69: [
    { targetLocation: 51, neighbor: 60 },
    { targetLocation: 67, neighbor: 68 },
    { targetLocation: 49, neighbor: 59 },
    { targetLocation: 92, neighbor: 80 },
    { targetLocation: 71, neighbor: 70 },
    { targetLocation: 90, neighbor: 79 },
  ],
  70: [
    { targetLocation: 52, neighbor: 61 },
    { targetLocation: 68, neighbor: 69 },
    { targetLocation: 50, neighbor: 60 },
    { targetLocation: 93, neighbor: 81 },
    { targetLocation: 72, neighbor: 71 },
    { targetLocation: 91, neighbor: 80 },
  ],
  71: [
    { targetLocation: 53, neighbor: 62 },
    { targetLocation: 69, neighbor: 70 },
    { targetLocation: 51, neighbor: 61 },
    { targetLocation: 94, neighbor: 82 },
    { targetLocation: 73, neighbor: 72 },
    { targetLocation: 92, neighbor: 81 },
  ],
  72: [
    { targetLocation: 54, neighbor: 63 },
    { targetLocation: 70, neighbor: 71 },
    { targetLocation: 52, neighbor: 62 },
    { targetLocation: 95, neighbor: 83 },
    { targetLocation: 74, neighbor: 73 },
    { targetLocation: 93, neighbor: 82 },
  ],
  73: [
    { targetLocation: 55, neighbor: 64 },
    { targetLocation: 71, neighbor: 72 },
    { targetLocation: 53, neighbor: 63 },
    { targetLocation: 96, neighbor: 84 },
    { targetLocation: 94, neighbor: 83 },
  ],
  74: [
    { targetLocation: 72, neighbor: 73 },
    { targetLocation: 54, neighbor: 64 },
    { targetLocation: 97, neighbor: 85 },
    { targetLocation: 95, neighbor: 84 },
  ],
  75: [
    { targetLocation: 56, neighbor: 65 },
    { targetLocation: 100, neighbor: 87 },
    { targetLocation: 77, neighbor: 76 },
    { targetLocation: 98, neighbor: 86 },
  ],
  76: [
    { targetLocation: 57, neighbor: 66 },
    { targetLocation: 101, neighbor: 88 },
    { targetLocation: 78, neighbor: 77 },
    { targetLocation: 99, neighbor: 87 },
  ],
  77: [
    { targetLocation: 58, neighbor: 67 },
    { targetLocation: 75, neighbor: 76 },
    { targetLocation: 56, neighbor: 66 },
    { targetLocation: 102, neighbor: 89 },
    { targetLocation: 79, neighbor: 78 },
    { targetLocation: 100, neighbor: 88 },
  ],
  78: [
    { targetLocation: 59, neighbor: 68 },
    { targetLocation: 76, neighbor: 77 },
    { targetLocation: 57, neighbor: 67 },
    { targetLocation: 103, neighbor: 90 },
    { targetLocation: 80, neighbor: 79 },
    { targetLocation: 101, neighbor: 89 },
  ],
  79: [
    { targetLocation: 60, neighbor: 69 },
    { targetLocation: 77, neighbor: 78 },
    { targetLocation: 58, neighbor: 68 },
    { targetLocation: 104, neighbor: 91 },
    { targetLocation: 81, neighbor: 80 },
    { targetLocation: 102, neighbor: 90 },
  ],
  80: [
    { targetLocation: 61, neighbor: 70 },
    { targetLocation: 78, neighbor: 79 },
    { targetLocation: 59, neighbor: 69 },
    { targetLocation: 105, neighbor: 92 },
    { targetLocation: 82, neighbor: 81 },
    { targetLocation: 103, neighbor: 91 },
  ],
  81: [
    { targetLocation: 62, neighbor: 71 },
    { targetLocation: 79, neighbor: 80 },
    { targetLocation: 60, neighbor: 70 },
    { targetLocation: 106, neighbor: 93 },
    { targetLocation: 83, neighbor: 82 },
    { targetLocation: 104, neighbor: 92 },
  ],
  82: [
    { targetLocation: 63, neighbor: 72 },
    { targetLocation: 80, neighbor: 81 },
    { targetLocation: 61, neighbor: 71 },
    { targetLocation: 107, neighbor: 94 },
    { targetLocation: 84, neighbor: 83 },
    { targetLocation: 105, neighbor: 93 },
  ],
  83: [
    { targetLocation: 64, neighbor: 73 },
    { targetLocation: 81, neighbor: 82 },
    { targetLocation: 62, neighbor: 72 },
    { targetLocation: 108, neighbor: 95 },
    { targetLocation: 85, neighbor: 84 },
    { targetLocation: 106, neighbor: 94 },
  ],
  84: [
    { targetLocation: 82, neighbor: 83 },
    { targetLocation: 63, neighbor: 73 },
    { targetLocation: 109, neighbor: 96 },
    { targetLocation: 107, neighbor: 95 },
  ],
  85: [
    { targetLocation: 83, neighbor: 84 },
    { targetLocation: 64, neighbor: 74 },
    { targetLocation: 110, neighbor: 97 },
    { targetLocation: 108, neighbor: 96 },
  ],
  86: [
    { targetLocation: 65, neighbor: 75 },
    { targetLocation: 88, neighbor: 87 },
  ],
  87: [
    { targetLocation: 66, neighbor: 76 },
    { targetLocation: 89, neighbor: 88 },
  ],
  88: [
    { targetLocation: 67, neighbor: 77 },
    { targetLocation: 86, neighbor: 87 },
    { targetLocation: 65, neighbor: 76 },
    { targetLocation: 90, neighbor: 89 },
  ],
  89: [
    { targetLocation: 68, neighbor: 78 },
    { targetLocation: 87, neighbor: 88 },
    { targetLocation: 66, neighbor: 77 },
    { targetLocation: 111, neighbor: 102 },
    { targetLocation: 91, neighbor: 90 },
  ],
  90: [
    { targetLocation: 69, neighbor: 79 },
    { targetLocation: 88, neighbor: 89 },
    { targetLocation: 67, neighbor: 78 },
    { targetLocation: 112, neighbor: 103 },
    { targetLocation: 92, neighbor: 91 },
  ],
  91: [
    { targetLocation: 70, neighbor: 80 },
    { targetLocation: 89, neighbor: 90 },
    { targetLocation: 68, neighbor: 79 },
    { targetLocation: 113, neighbor: 104 },
    { targetLocation: 93, neighbor: 92 },
    { targetLocation: 111, neighbor: 103 },
  ],
  92: [
    { targetLocation: 71, neighbor: 81 },
    { targetLocation: 90, neighbor: 91 },
    { targetLocation: 69, neighbor: 80 },
    { targetLocation: 114, neighbor: 105 },
    { targetLocation: 94, neighbor: 93 },
    { targetLocation: 112, neighbor: 104 },
  ],
  93: [
    { targetLocation: 72, neighbor: 82 },
    { targetLocation: 91, neighbor: 92 },
    { targetLocation: 70, neighbor: 81 },
    { targetLocation: 95, neighbor: 94 },
    { targetLocation: 113, neighbor: 105 },
  ],
  94: [
    { targetLocation: 73, neighbor: 83 },
    { targetLocation: 92, neighbor: 93 },
    { targetLocation: 71, neighbor: 82 },
    { targetLocation: 96, neighbor: 95 },
    { targetLocation: 114, neighbor: 106 },
  ],
  95: [
    { targetLocation: 74, neighbor: 84 },
    { targetLocation: 93, neighbor: 94 },
    { targetLocation: 72, neighbor: 83 },
    { targetLocation: 97, neighbor: 96 },
  ],
  96: [
    { targetLocation: 94, neighbor: 95 },
    { targetLocation: 73, neighbor: 84 },
  ],
  97: [
    { targetLocation: 95, neighbor: 96 },
    { targetLocation: 74, neighbor: 85 },
  ],
  98: [
    { targetLocation: 75, neighbor: 86 },
    { targetLocation: 100, neighbor: 99 },
  ],
  99: [
    { targetLocation: 76, neighbor: 87 },
    { targetLocation: 101, neighbor: 100 },
  ],
  100: [
    { targetLocation: 77, neighbor: 88 },
    { targetLocation: 98, neighbor: 99 },
    { targetLocation: 75, neighbor: 87 },
    { targetLocation: 102, neighbor: 101 },
  ],
  101: [
    { targetLocation: 78, neighbor: 89 },
    { targetLocation: 99, neighbor: 100 },
    { targetLocation: 76, neighbor: 88 },
    { targetLocation: 103, neighbor: 102 },
  ],
  102: [
    { targetLocation: 79, neighbor: 90 },
    { targetLocation: 100, neighbor: 101 },
    { targetLocation: 77, neighbor: 89 },
    { targetLocation: 115, neighbor: 111 },
    { targetLocation: 104, neighbor: 103 },
  ],
  103: [
    { targetLocation: 80, neighbor: 91 },
    { targetLocation: 101, neighbor: 102 },
    { targetLocation: 78, neighbor: 90 },
    { targetLocation: 116, neighbor: 112 },
    { targetLocation: 105, neighbor: 104 },
  ],
  104: [
    { targetLocation: 81, neighbor: 92 },
    { targetLocation: 102, neighbor: 103 },
    { targetLocation: 79, neighbor: 91 },
    { targetLocation: 117, neighbor: 113 },
    { targetLocation: 106, neighbor: 105 },
    { targetLocation: 115, neighbor: 112 },
  ],
  105: [
    { targetLocation: 82, neighbor: 93 },
    { targetLocation: 103, neighbor: 104 },
    { targetLocation: 80, neighbor: 92 },
    { targetLocation: 107, neighbor: 106 },
    { targetLocation: 116, neighbor: 113 },
  ],
  106: [
    { targetLocation: 83, neighbor: 94 },
    { targetLocation: 104, neighbor: 105 },
    { targetLocation: 81, neighbor: 93 },
    { targetLocation: 108, neighbor: 107 },
    { targetLocation: 117, neighbor: 114 },
  ],
  107: [
    { targetLocation: 84, neighbor: 95 },
    { targetLocation: 105, neighbor: 106 },
    { targetLocation: 82, neighbor: 94 },
    { targetLocation: 109, neighbor: 108 },
  ],
  108: [
    { targetLocation: 85, neighbor: 96 },
    { targetLocation: 106, neighbor: 107 },
    { targetLocation: 83, neighbor: 95 },
    { targetLocation: 110, neighbor: 109 },
  ],
  109: [
    { targetLocation: 107, neighbor: 108 },
    { targetLocation: 84, neighbor: 96 },
  ],
  110: [
    { targetLocation: 108, neighbor: 109 },
    { targetLocation: 85, neighbor: 97 },
  ],
  111: [
    { targetLocation: 91, neighbor: 103 },
    { targetLocation: 89, neighbor: 102 },
    { targetLocation: 118, neighbor: 115 },
    { targetLocation: 113, neighbor: 112 },
  ],
  112: [
    { targetLocation: 92, neighbor: 104 },
    { targetLocation: 90, neighbor: 103 },
    { targetLocation: 119, neighbor: 116 },
    { targetLocation: 114, neighbor: 113 },
  ],
  113: [
    { targetLocation: 93, neighbor: 105 },
    { targetLocation: 111, neighbor: 112 },
    { targetLocation: 91, neighbor: 104 },
    { targetLocation: 118, neighbor: 116 },
  ],
  114: [
    { targetLocation: 94, neighbor: 106 },
    { targetLocation: 112, neighbor: 113 },
    { targetLocation: 92, neighbor: 105 },
    { targetLocation: 119, neighbor: 117 },
  ],
  115: [
    { targetLocation: 104, neighbor: 112 },
    { targetLocation: 102, neighbor: 111 },
    { targetLocation: 120, neighbor: 118 },
    { targetLocation: 117, neighbor: 116 },
  ],
  116: [
    { targetLocation: 105, neighbor: 113 },
    { targetLocation: 103, neighbor: 112 },
  ],
  117: [
    { targetLocation: 106, neighbor: 114 },
    { targetLocation: 115, neighbor: 116 },
    { targetLocation: 104, neighbor: 113 },
    { targetLocation: 120, neighbor: 119 },
  ],
  118: [
    { targetLocation: 113, neighbor: 116 },
    { targetLocation: 111, neighbor: 115 },
  ],
  119: [
    { targetLocation: 114, neighbor: 117 },
    { targetLocation: 112, neighbor: 116 },
  ],
  120: [
    { targetLocation: 117, neighbor: 119 },
    { targetLocation: 115, neighbor: 118 },
  ],
};
