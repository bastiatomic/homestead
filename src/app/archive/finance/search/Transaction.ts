export interface Transaction {
    date: String;
    name: String;
    value: String;
    counterpart: String;
    category: String;
    account?: String;
  }

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }