#!/usr/bin/python3
"""
Module for CustomObject class with serialization and deserialization methods.
"""

import pickle

class CustomObject:
    """
    A custom class with attributes name, age, and is_student.
    """

    def __init__(self, name, age, is_student):
        """
        Initializes the CustomObject with name, age, and is_student.
        """
        self.name = name
        self.age = age
        self.is_student = is_student

    def display(self):
        """
        Prints the object's attributes.
        """
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")
        print(f"Is Student: {self.is_student}")

    def serialize(self, filename):
        """
        Serializes the object to a file.
        """
        try:
            with open(filename, 'wb') as file:
                pickle.dump(self, file)
        except Exception as e:
            return None

    @classmethod
    def deserialize(cls, filename):
        """
        Deserializes the object from a file.
        """
        try:
            with open(filename, 'rb') as file:
                return pickle.load(file)
        except Exception as e:
            return None
