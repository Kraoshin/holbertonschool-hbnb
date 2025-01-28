#!/usr/bin/python3
"""
This module provides a function that divides all elements of a matrix.
The matrix must be a list of lists of integers or floats.
Each row of the matrix must be of the same size.
"div" must be a number (integer or float) but not 0.
"""
def matrix_divided(matrix, div):
    """
    Divides all elements of a matrix by "div".
    Returns a new matrix with results rounded to 2 decimal places.
    """
    if not isinstance(matrix, list) or not all(isinstance(row, list) for row in matrix):
        raise TypeError("matrix must be a matrix (list of lists) of integers/floats")
    if not all(isinstance(element, (int, float)) for row in matrix for element in row):
        raise TypeError("matrix must be a matrix (list of lists) of integers/floats")
    if not all(len(row) == len(matrix[0]) for row in matrix):
        raise TypeError("Each row of the matrix must have the same size")
    if not isinstance(div, (int, float)):
        raise TypeError("div must be a number")
    if div == 0:
        raise ZeroDivisionError("division by zero")

    return [[round(element / div, 2) for element in row] for row in matrix]
