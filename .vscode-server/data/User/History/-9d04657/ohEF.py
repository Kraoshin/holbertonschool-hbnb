#!/usr/bin/env python3
"""
This module defines a FlyingFish class that inherits from Fish and Bird.
"""


class Fish:
    """Represents a fish."""

    def swim(self):
        """Prints that the fish is swimming."""
        print("The fish is swimming")

    def habitat(self):
        """Prints the habitat of the fish."""
        print("The fish lives in water")


class Bird:
    """Represents a bird."""

    def fly(self):
        """Prints that the bird is flying."""
        print("The bird is flying")

    def habitat(self):
        """Prints the habitat of the bird."""
        print("The bird lives in the sky")


class FlyingFish(Fish, Bird):
    """Represents a flying fish."""

    def fly(self):
        """Prints that the flying fish is soaring."""
        print("The flying fish is soaring!")

    def swim(self):
        """Prints that the flying fish is swimming."""
        print("The flying fish is swimming!")

    def habitat(self):
        """Prints the habitat of the flying fish."""
        print("The flying fish lives both in water and the sky!")
