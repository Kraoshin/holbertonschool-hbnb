#!/usr/bin/env python3
"""
This module defines a Dragon class that can swim and fly.
"""


class SwimMixin:
    """Mixin class for swimming capability."""
    
    def swim(self):
        """Prints that the creature swims."""
        print("The creature swims!")


class FlyMixin:
    """Mixin class for flying capability."""
    
    def fly(self):
        """Prints that the creature flies."""
        print("The creature flies!")


class Dragon(SwimMixin, FlyMixin):
    """Represents a dragon that can swim and fly."""
    
    def roar(self):
        """Prints that the dragon roars."""
        print("The dragon roars!")
