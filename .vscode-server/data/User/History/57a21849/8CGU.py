#!/usr/bin/python3
"""Unittest for max_integer([..])
"""
import unittest
max_integer = __import__('6-max_integer').max_integer

class TestMaxInteger(unittest.TestCase):
    def test_results(self):
        self.assertEqual(max_integer([1, 2, 3, 4]), 4)
        self.assertEqual(max_integer([-1, -2, -3, -4]), -1)
        self.assertEqual(max_integer([1, 2, 4, 3]), 4)
        self.assertEqual(max_integer([7]), 7)
        self.assertEqual(max_integer([]), None)
        self.assertEqual(max_integer(), None)
    
    def test_types(self):
        with self.assertRaises(TypeError):
            max_integer(["mlem", 2, 3, 4])
            max_integer(["mlem", "gaya"])
            max_integer("mlem")
            max_integer([1, 2, 3, 4.7])
            max_integer([1, 2], [3, 4])
            max_integer([[1, 2], [3, 4]])

if __name__ == '__main__':
    unittest.main()
