export interface Card {
  value: ValueType;
  symbol: Symbol;
  color: ColorType;
  isVisible?: boolean;
  id?: any;
  isLocked?: boolean;
}

export type ValueType = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';

export type Symbol =  "♢" | "♧" |  "♡" | "♤";

export type ColorType = 'black' | 'red';
