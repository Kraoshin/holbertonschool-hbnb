#!/usr/bin/python3
"""
Module for basic serialization and deserialization functions.
"""


import json

def serialize_and_save_to_file(data, filename):
    """
    Serializes and saves data to the specified file.
    """
    with open(filename, 'w') as file:
        json.dump(data, file)


def load_and_deserialize(filename):
    """
    Loads and deserializes data from the specified file.
    """
    with open(filename, 'r') as file:
        return json.load(file)
