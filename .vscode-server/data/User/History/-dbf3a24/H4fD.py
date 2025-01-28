#!/usr/bin/python3
"""Defines a class Square."""

class Square:
    """Class square with no class attributes but with a private instance attribute size."""

    def __init__(self, size):
        """Initializes the square with a private instance attribute size."""
        self.__size = size
