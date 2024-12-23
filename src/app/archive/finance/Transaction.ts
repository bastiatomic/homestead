export interface Transaction{
    timestamp: Date;
    description: string;
    value: number;
    counterpart: string;
    category: string;
    account: 'DeutscheBank' | 'Commerzbank' | 'PayPal' | 'TradeRepublic' | 'Cash' | 'GooglePlay' 
}