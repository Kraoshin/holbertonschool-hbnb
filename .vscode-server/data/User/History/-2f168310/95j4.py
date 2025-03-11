class Review:
    def __init__(self, id: str, text: str, rating: int, place, user, created_at, updated_at):
        self.id = id
        self.text = text
        self.rating = rating
        self.place = place
        self.user = user
        self.created_at = created_at
        self.updated_at = updated_at
        pass
