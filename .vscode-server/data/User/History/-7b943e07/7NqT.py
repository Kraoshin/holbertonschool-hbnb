def is_kind_of_class(obj, a_class):
    """
    Returns True if the object is an instance of, or if the object is an instance of a class
    that inherited from, the specified class; otherwise False.

    Args:
        obj: The object to check.
        a_class: The class to match the type of obj to.

    Returns:
        bool: True if obj is an instance or inherited instance of a_class, otherwise False.
    """
    return isinstance(obj, a_class)
