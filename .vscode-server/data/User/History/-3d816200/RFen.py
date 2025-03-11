class MyList(list):
    """
    A class that inherits from list and print the list in sorted order.
    """

    def print_sorted(self):
        """
        Prints the list in ascending sorted order.
        """
        print(sorted(self))
