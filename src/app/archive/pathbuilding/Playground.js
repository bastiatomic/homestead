function main(){

    let grid = [
        [
          { bg: 2 },
          { bg: 2 },
          { bg: 4 },
          { bg: 4 },
          { bg: 4 },
          { bg: 3 },
          { bg: 3 },
          { bg: 4 },
          { bg: 4 },
          { bg: 4 },
          { bg: 4 },
          { bg: 0 },
        ],
        [
          { bg: 2 },
          { bg: 0 },
          { bg: 0 },
          { bg: 30 },
          { bg: 0 },
          { bg: 10 },
          { bg: 10 },
          { bg: 0 },
          { bg: 0 },
          { bg: 0 },
          { bg: 0 },
          { bg: 0 },
        ],
        [
          { bg: 2 },
          { bg: 2 },
          { bg: 0 },
          { bg: 4 },
          { bg: 0 },
          { bg: 3 },
          { bg: 3 },
          { bg: 0 },
          { bg: 4 },
          { bg: 0 },
          { bg: 0 },
          { bg: 30 },
        ],
        [
          { bg: 2 },
          { bg: 4 },
          { bg: 0 },
          { bg: 4 },
          { bg: 0 },
          { bg: 3 },
          { bg: 3 },
          { bg: 0 },
          { bg: 4 },
          { bg: 0 },
          { bg: 0 },
          { bg: 0 },
        ],
        [
          { bg: 20 },
          { bg: 0 },
          { bg: 0 },
          { bg: 21 },
          { bg: 0 },
          { bg: 11 },
          { bg: 11 },
          { bg: 0 },
          { bg: 0 },
          { bg: 21 },
          { bg: 0 },
          { bg: 0 },
        ],
        [
          { bg: 2 },
          { bg: 0 },
          { bg: 0 },
          { bg: 4 },
          { bg: 0 },
          { bg: 3 },
          { bg: 3 },
          { bg: 0 },
          { bg: 4 },
          { bg: 0 },
          { bg: 0 },
          { bg: 0 },
        ],
        [
          { bg: 2 },
          { bg: 0 },
          { bg: 0 },
          { bg: 4 },
          { bg: 0 },
          { bg: 3 },
          { bg: 3 },
          { bg: 0 },
          { bg: 4 },
          { bg: 0 },
          { bg: 30 },
          { bg: 30 },
        ],
        [
          { bg: 2 },
          { bg: 0 },
          { bg: 0 },
          { bg: 30 },
          { bg: 0 },
          { bg: 10 },
          { bg: 10 },
          { bg: 0 },
          { bg: 30 },
          { bg: 0 },
          { bg: 0 },
          { bg: 0 },
        ],
        [
          { bg: 2 },
          { bg: 4 },
          { bg: 4 },
          { bg: 4 },
          { bg: 4 },
          { bg: 3 },
          { bg: 3 },
          { bg: 4 },
          { bg: 4 },
          { bg: 4 },
          { bg: 0 },
          { bg: 20 },
        ],
      ];

    let newGrid = []

    grid.forEach(row => {
        let row1 = []
        row.forEach((element)=> {
            row1.push(element.bg)
        })
        newGrid.push(row1)
    });

    console.log(newGrid)
}


main();