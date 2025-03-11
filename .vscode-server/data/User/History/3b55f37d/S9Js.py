def inherits_from(obj, a_class):
    """
    Returns True if the object is an instance of inherited class
    (directly or indirectly)
    from the specified class; otherwise False.

    Args:
        obj: The object to check.
        a_class: The class to match the type of obj to.

    Returns:
        bool: True if obj is an inherited instance of a_class, otherwise False.
    """
    return isinstance(obj, a_class) and type(obj) is not a_class
