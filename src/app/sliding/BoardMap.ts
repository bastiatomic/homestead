export interface BoardMap {
    [key: number] : number[];
}

// the index & direction will be applied without check to the startBoard
export interface Move {
    startBoard : BoardMap;
    index : number;
    direction : number;
}