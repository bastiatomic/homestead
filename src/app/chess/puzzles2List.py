import csv

# Define the path to your CSV file

input_file = 'src/app/chess/database.csv'
output_file = 'src/app/chess/puzzles2.ts'

# Open the input and output files
# Read and modify the CSV file
with open(input_file, mode='r', newline='', encoding='utf-8') as infile, \
     open(output_file, mode='w', newline='', encoding='utf-8') as outfile:
    
    reader = csv.reader(infile)
    writer = csv.writer(outfile)
    for row in reader:
        row_as_string = ','.join(row)  # Converts the row (list) to a string
        new_row = "'" + row_as_string + "',"
        print(new_row)

        outfile.write(new_row)

print("Modification complete. Check the output file.")
