let knight_mapping = {}

for(let i = 0; i<64; i++){
    const row = i%8; 
    const column = Math.floor(i/8)
    knight_mapping[i] = []

    const values = [ [column-2,row-1], [column-2,row+1], 
        [column-1,row+2], [column+1,row+2],
        [column+2,row-1], [column+2,row+1], 
        [column-1,row-2], [column+1,row-2] ];


    values.forEach((item)=> {
        if (item[0] >=0 && item[0] <= 7 && item[1] >=0 && item[1] <= 7){
            knight_mapping[i].push(item[0] * 8 + item[1])
        }
    })

   

    
}

console.log(knight_mapping)