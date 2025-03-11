#!/usr/bin/python3
"""
This module defines an abstract base class for shapes using duck typing.
"""

from abc import ABC, abstractmethod
import math


class Shape(ABC):
    """
    An abstract base class for shapes.

    Methods:
        area(self): Abstract method to calculate the area of the shape.
    """

    @abstractmethod
    def area(self):
        """
        Abstract method to calculate the area of the shape.

        This method should be implemented by subclasses to provide the specific
        area calculation for the shape.

        Raises:
            NotImplementedError: If the method is not implemented by subclass.
        """
        pass

    def perimeter(self):
        """
        Abstract method to calculate the perimeter of the shape.

        This method should be implemented by subclasses to provide the specific
        perimeter calculation for the shape.

        Raises:
            NotImplementedError: If the method is not implemented by subclass.
        """
        pass


class Rectangle(Shape):
    """
    A class representing a rectangle.

    Attributes:
        width (int): The width of the rectangle.
        height (int): The height of the rectangle.
    """

    def __init__(self, width, height):
        """
        Initializes a new Rectangle with the given width and height.

        Args:
            width (int): The width of the rectangle.
            height (int): The height of the rectangle.
        """
        self.width = width
        self.height = height

    def area(self):
        """
        Calculates the area of the rectangle.

        Returns:
            int: The area of the rectangle.
        """
        return self.width * self.height

    def perimeter(self):
        """
        Calculates the perimeter of the rectangle.

        Returns:
            int: The perimeter of the rectangle.
        """
        return 2 * (self.width + self.height)


class Circle(Shape):
    """
    A class representing a circle.

    Attributes:
        radius (int): The radius of the circle.
    """

    def __init__(self, radius):
        """
        Initializes a new Circle with the given radius.

        Args:
            radius (int): The radius of the circle.
        """
        self.radius = radius

    def area(self):
        """
        Calculates the area of the circle.

        Returns:
            int: The area of the circle.
        """
        return math.pi * self.radius ** 2

    def perimeter(self):
        """
        Calculates the perimeter of the circle.

        Returns:
            int: The perimeter of the circle.
        """
        return 2 * math.pi * self.radius


def shape_info(shape):
    """
    A class to display information about a shape.

    Methods:
        display_info(self, shape): Displays the area and perimeter
        of the shape.
    """
    area = shape.area()
    perimeter = shape.perimeter()
    print(f"Area: {shape.area}")
    print(f"Perimeter: {shape.perimeter}")
    return area, perimeter
