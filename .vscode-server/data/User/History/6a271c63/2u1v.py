#!/usr/bin/env python3
"""
This module defines a CountedIterator class that wraps an iterable and counts
the number of items iterated.
"""


class CountedIterator:
    """
    A class that wraps an iterable and counts the number of items iterated.
    """

    def __init__(self, iterable):
        """
        Initializes a new CountedIterator with the given iterable.

        Args:
            iterable: The iterable to wrap.
        """
        self.iterator = iter(iterable)
        self.count = 0

    def __iter__(self):
        """
        Returns the iterator object.

        Returns:
            The iterator object.
        """
        return self

    def __next__(self):
        """
        Returns the next item in the iterable.

        Returns:
            The next item in the iterable.

        Raises:
            StopIteration: If there are no more items in the iterable.
        """
        self.count += 1
        return next(self.iterator)

    def get_count(self):
        """
        Returns the number of items iterated.

        Returns:
            The number of items iterated.
        """
        return self.count
