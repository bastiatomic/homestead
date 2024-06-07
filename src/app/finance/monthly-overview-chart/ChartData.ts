export interface ChartData{
    labels: String[],
    datasets: Dataset[]
}

interface Dataset {
    label: String,
    data: number[],
    backgroundColor?: String
}