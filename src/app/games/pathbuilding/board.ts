import { Tile } from "./Tile";

export interface Board{

    //official grid
    grid: Tile[][]

    //index of start character
    startIndex: {x: number, y: number}


}