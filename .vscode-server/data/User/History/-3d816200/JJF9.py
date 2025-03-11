#!/usr/bin/python3
"""
Defines a class MyList that inherits from list.
"""


class MyList(list):
    """
    A class that inherits from list and print the list in sorted order.
    """

    def print_sorted(self):
        """
        Prints the list in ascending sorted order.
        """
        print(sorted(self))
