
let pawnsMapping = {"white": {}, "black": {}}

//WHITE
for(let i = 0; i<64; i++){

    const col = i % 8;
    const row = Math.floor(i / 8);

    if( i >=8  && i <= 55 ){
        pawnsMapping["white"][i] = {}
        pawnsMapping["white"][i]["move"] = i-8

        if(i >= 48 && i <= 55){
            pawnsMapping["white"][i]["doubleMove"] = i-16
        }

        //left hit
        pawnsMapping["white"][i]["hits"] = []
        if(col-1 >= 0 ){
            pawnsMapping["white"][i]["hits"].push(i-9)
        }

        //right hit
        if(col+1 <= 7){
            pawnsMapping["white"][i]["hits"].push(i-7)
        }

        if(i>= 8 && i<= 15){
            pawnsMapping["white"][i]["canAscend"] = true;
        }
        
    }

    
}

// BLACK

for(let i = 0; i<64; i++){

    const col = i % 8;
    const row = Math.floor(i / 8);

    if( i >=8  && i <= 55 ){
        pawnsMapping["black"][i] = {}
        pawnsMapping["black"][i]["move"] = i+8

        if(i >= 8 && i <= 15){
            pawnsMapping["black"][i]["doubleMove"] = i+16
        }

        //left hit
        pawnsMapping["black"][i]["hits"] = []
        if(col-1 >= 0 ){
            pawnsMapping["black"][i]["hits"].push(i+7)
        }

        //right hit
        if(col+1 <= 7){
            pawnsMapping["black"][i]["hits"].push(i+9)
        }

        if(i>= 48 && i<= 55){
            pawnsMapping["black"][i]["canAscend"] = true;
        }
        
    }

    
}

console.log(JSON.stringify(pawnsMapping));