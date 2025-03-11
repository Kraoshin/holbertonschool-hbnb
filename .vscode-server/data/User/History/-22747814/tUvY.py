class BaseGeometry:
    """
    A base class for geometry-related operations.

    Methods:
        area(self): Raises an Exception indicating that the method
        is not implemented.
    """

    def area(self):
        """
        Raises an Exception indicating that the method is not implemented.

        Raises:
            Exception: Always raises an Exception with the message
            "area() is not implemented".
        """
        raise Exception("area() is not implemented")
