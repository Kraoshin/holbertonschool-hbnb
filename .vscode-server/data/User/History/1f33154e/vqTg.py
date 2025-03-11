#!/usr/bin/python3

"""python file that contains the class definition of a State and an instance"""

from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base


Base = declarative_base()


class State(Base):
    """Class definition for State."""
    __tablename__ = 'states'

    id = Column(Integer,
                primary_key=True,
                autoincrement=True
                )
    name = Column(String(128),
                  nullable=False
                  )
