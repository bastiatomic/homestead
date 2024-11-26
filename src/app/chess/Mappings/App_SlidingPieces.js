//what do we see here: Calculation of the distance to the board for each given position in each of the 8 directions
// [top,bottom,left,right,topleft,topright,bottomleft,bottomright] //TODO: maybe naming?

let sliding_mapping = [];

for (let i = 0; i < 64; i++) {
    const col = i % 8;
    const row = Math.floor(i / 8);

    // Chess board size
    const BOARD_SIZE = 8;

    const down = BOARD_SIZE - 1 - row;
    const up = row;
    const right = BOARD_SIZE - 1 - col;
    const left = col;

    // Calculate diagonal positions
    const downRight = Math.min(down, right);
    const downLeft = Math.min(down, left);
    const upRight = Math.min(up, right);
    const upLeft = Math.min(up, left);

    sliding_mapping.push([up,down,left,right, upLeft,upRight,downLeft, downRight])

}

console.log(sliding_mapping);