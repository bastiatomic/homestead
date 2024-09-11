export interface Card {
  value: ValueType;
  symbol: Symbol;
  color: ColorType;
  isVisible?: boolean;
  id?: any;
}

export type ValueType = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'B' | 'D' | 'K' | 'A';

export type Symbol =  "♢" | "♧" |  "♡" | "♤";

export type ColorType = 'black' | 'red';
