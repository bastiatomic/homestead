import csv

# Define the path to your CSV file
file_path = 'src/app/archive/chess/puzzles.csv'

# Read the CSV and convert rows to a list of strings
with open(file_path, mode='r') as file:
    reader = csv.reader(file)
    list_of_strings = [' '.join(row) for row in reader]  # Join each row's elements into a single string

print(list_of_strings)
