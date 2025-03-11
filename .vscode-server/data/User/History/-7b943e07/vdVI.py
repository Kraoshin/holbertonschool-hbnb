#!/usr/bin/python3
"""
This module defines a function is_kind_of_class.
The function checks if an object is an instance of a given class
or if it is an instance of a class that inherited from the given class.
"""


def is_kind_of_class(obj, a_class):
    """
    Returns True if the object is an instance of a class,
    or if the object is an instance of a class that inherited from,
    the specified class; otherwise False.

    Args:
        obj: The object to check.
        a_class: The class to match the type of obj to.

    Returns:
        bool: True if obj is an instance or inherited instance of a_class,
        otherwise False.
    """
    return isinstance(obj, a_class)
