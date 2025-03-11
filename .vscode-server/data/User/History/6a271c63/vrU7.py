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

    def __next__(self):
       """
        Fetch the next item from the iterator and increment the counter.

        Returns:
            The next item from the iterator.

        Raises:
            StopIteration: If there are no more items in the iterator.
        """
        try:
            item = next(self.iterator)
            self.count += 1
            return item
        except StopIteration:
            raise

    def get_count(self):
        """
        Returns the number of items iterated.

        Returns:
            The number of items iterated.
        """
        return self.count
