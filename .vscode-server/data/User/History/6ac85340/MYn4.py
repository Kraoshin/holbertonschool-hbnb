#!/usr/bin/env python3
"""
This module defines a VerboseList class that extends the built-in list class
and provides additional print statements for debugging purposes.
"""


class VerboseList(list):
    """
    A subclass of list that provides verbose output for list operations.

    Methods:
        append: Appends an item to the list with a print statement.
        extend: Extends the list with items with a print statement.
        remove: Removes an item from the list with a print statement.
        pop: Removes and returns an item at the given index with a print statement.
    """

    def append(self, item):
        """
        Appends an item to the list with a print statement.

        Args:
            item: The item to append to the list.
        """
        print(f"Append: {item}")
        super().append(item)

    def extend(self, items):
        """
        Extends the list with items with a print statement.

        Args:
            items: The items to extend the list with.
        """
        print(f"Extend: {items}")
        super().extend(items)

    def remove(self, item):
        """
        Removes an item from the list with a print statement.

        Args:
            item: The item to remove from the list.
        """
        print(f"Remove: {item}")
        super().remove(item)

    def pop(self, index=-1):
        """
        Removes and returns an item at the given index with a print statement.

        Args:
            index (int): The index of the item to remove and return. Defaults to -1.

        Returns:
            The item removed from the list.
        """
        item = super().pop(index)
        print(f"Pop: {item}")
        return item
