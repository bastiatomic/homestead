let kingmapping = {}

let neighbormapping = [[-1, -1, -9], [-1, 0, -8], [-1, 1,-7], [1,-1, 7], [1,0, 8], [1,1, 9], [0,1,1], [0,-1,-1]]

for(let i = 0; i<64; i++){
    const column = i%8; 
    const row = Math.floor(i/8)
    kingmapping[i] = []

    neighbormapping.forEach((item) => {
        if(row+item[0] >= 0 && row+item[0]<= 7 && column+item[1] >= 0 && column+item[1]<= 7){
            kingmapping[i].push(i+item[2])
        }
    })
}

console.log(kingmapping)