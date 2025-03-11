import csv
import json


def convert_csv_to_json(csv_filename):
    """
    Converts CSV data to JSON format
    """
    try:
        with open(csv_filename, 'r') as csv_file:
            reader = csv.DictReader(csv_file)
            data = [row for row in reader]

        with open('data.json', 'w') as json_file:
            json.dump(data, json_file, indent=4)

        return True

    except FileNotFoundError:
        print(f"Error: file {csv_filename} was not found.")
        return False

    except Exception as e:
        print(f"Error: {e}")
        return False
