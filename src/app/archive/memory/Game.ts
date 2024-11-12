export interface Game {
    board: Card[];
    pairs: number;
}

export interface Card {
    element: string,
    isVisible: boolean,
    displayName: string
}