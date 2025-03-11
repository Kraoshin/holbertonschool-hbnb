#!/usr/bin/python3
"""
defines a function that writes a string to a text file (UTF8)
and returns the number of characters written
"""


def write_file(filename="", text=""):
    """
    writes a string to a text file (UTF8)
    and returns the number of characters written

    Args:
        filename (str): the name of the file to write to
        text (str): the text to write to the file
    """
    with open(filename, "w", encoding="utf-8") as file:
        return file.write(text)
