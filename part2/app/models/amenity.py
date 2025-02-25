from basemodel import BaseModel


class Amenity(BaseModel):
    """Represents an amenity in the hbnb app."""

    def __init__(self, name=""):
        """Initialize amenity with name."""
        super().__init__()
        self.name = name

    def __str__(self):
        """Return a string amenity."""
        return (f"[Amenity] ({self.id}) {self.name}")
