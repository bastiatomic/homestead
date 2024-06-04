export interface Transaction {
  date: String;
  description: String;
  amount: number;
  counterpart: String;
  category: String;
  account: String;
}

export const transactions: Transaction[] = [
  {
    date: '09.05.2024',
    description: 'Pizza Margherita (Brettspiel Night by me)',
    amount: -6.0,
    counterpart: 'Kebab Haus Ginnheim',
    category: 'Lebensmittel',
    account: 'Deutsche Bank',
  },
  {
    date: '30.04.2024',
    description: 'Einkauf',
    amount: -12.64,
    counterpart: 'Rewe',
    category: 'Lebensmittel',
    account: 'Deutsche Bank',
  },
  {
    date: '30.04.2024',
    description: 'Einkauf',
    amount: -7.28,
    counterpart: 'Rewe',
    category: 'Lebensmittel',
    account: 'Deutsche Bank',
  },
  {
    date: '30.04.2024',
    description: 'Mittagessen in Wetzlar',
    amount: -3.9,
    counterpart: 'Brasserie Wetzlar',
    category: 'Lebensmittel',
    account: 'Deutsche Bank',
  },
  {
    date: '30.04.2024',
    description: 'Sanifair',
    amount: -1.0,
    counterpart: 'Sanifair',
    category: 'Freizeit',
    account: 'Deutsche Bank',
  },
  {
    date: '30.04.2024',
    description: 'Garderobe',
    amount: -4.0,
    counterpart: 'ZOOM Frankfurt',
    category: 'Freizeit',
    account: 'Deutsche Bank',
  },
  {
    date: '29.04.2024',
    description: 'Einkauf',
    amount: -5.11,
    counterpart: 'dm',
    category: 'Haushalt',
    account: 'Deutsche Bank',
  },
  {
    date: '26.04.2024',
    description: 'Einkauf',
    amount: -8.06,
    counterpart: 'Rewe',
    category: 'Lebensmittel',
    account: 'Deutsche Bank',
  },
  {
    date: '25.04.2024',
    description: 'Rock the Boat',
    amount: -16.75,
    counterpart: 'ticket i/O GmbH',
    category: 'Freizeit',
    account: 'Deutsche Bank',
  },
  {
    date: '24.04.2024',
    description: 'Einkauf',
    amount: -14.03,
    counterpart: 'Rewe',
    category: 'Lebensmittel',
    account: 'Deutsche Bank',
  },
];

export const chartDataMonthlyOverview = {
  labels: [
    "Jan. '24",
    "Feb. '24",
    "März '24",
    "Apr. '24",
    "Mai '24",
    "Juni '24",
  ],
  datasets: [
    {
      label: 'Gehalt',
      data: [1431.89, 1385.95, 1674.63, 1391.26, 0, 0],
      backgroundColor: 'rgba(255, 182, 193, 0.6)',
    },
    {
      label: 'Miete',
      data: [-565, -565, -565, -565, 0, 0],
      backgroundColor: 'rgba(173, 216, 230, 0.6)',
    },
    {
      label: 'Geschenke',
      data: [250, 160, 1150, 300, 0, 0],
      backgroundColor: 'rgba(255, 206, 86, 0.6)',
    },
    {
      label: 'Lebensmittel',
      data: [-281.95, -223.62, -247.18, -143.68, -6, 0],
      backgroundColor: 'rgba(152, 251, 152, 0.6)',
    },
    {
      label: 'Freizeit',
      data: [-81.47, -149.2, -165.66, -57.63, 0, 0],
      backgroundColor: 'rgba(253, 253, 150, 0.6)',
    },
    {
      label: 'Technik',
      data: [0, 0, -329, 0, 0, 0],
      backgroundColor: 'rgba(216, 191, 216, 0.6)',
    },
    {
      label: 'Haushalt',
      data: [-22.92, -6.34, -62.42, -14.5, 0, 0],
      backgroundColor: 'rgba(255, 179, 71, 0.6)',
    },
    {
      label: 'Transport',
      data: [-26.46, -26.46, 0, -44.48, 0, 0],
      backgroundColor: 'rgba(189, 252, 201, 0.6)',
    },
    {
      label: 'Mobilfunk',
      data: [-14.99, -14.99, -14.99, -14.99, 0, 0],
      backgroundColor: 'rgba(255, 218, 185, 0.6)',
    },
    {
      label: 'Kleidung',
      data: [-39.97, -9.99, 0, 0, 0, 0],
      backgroundColor: 'rgba(255, 160, 122, 0.6)',
    },
  ],
};
