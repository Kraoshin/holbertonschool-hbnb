#!/usr/bin/env python3
"""
This module defines an abstract class Animal and two subclasses Dog and Cat.
"""
from abc import ABC, abstractmethod


class Animal(ABC):
    """
    This class represents an abstract definition of an animal.
    """
    @abstractmethod
    def sound(self):
        """
        This method will be implemented by subclasses.
        """
        pass


class Dog(Animal):
    """
    This class represents a dog.
    """
    def sound(self):
        """
        This method returns the sound of a dog.
        """
        return "Woof"


class Cat(Animal):
    """
    This class represents a cat.
    """
    def sound(self):
        """
        This method returns the sound of a cat.
        """
        return "Meow"
