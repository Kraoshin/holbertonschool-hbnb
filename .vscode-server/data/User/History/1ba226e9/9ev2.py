#!/usr/bin/python3
"""Module for Student class."""
import json


class Student:
    """Class Student."""
    def __init__(self, first_name, last_name, age):
        """Constructor for Student class."""
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        """Method to retrieve dict representation of Student instance."""
        if attrs is None:
            return self.__dict__
        else:
            new_dict = {}
            for key in attrs:
                if key in self.__dict__:
                    new_dict[key] = self.__dict__[key]
            return new_dict

    def reload_from_json(self, json):
        """Method to replace all attributes of Student instance."""
        for key in json:
            self.__dict__[key] = json[key]
