#!/usr/bin/python3
"""
Defines the City class, which represents a city in the database.
"""


from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from model_state import Base
Base = declarative_base()


class City(Base):
    __tablename__ = 'cities'

    id = Column(Integer,
                primary_key=True,
                autoincrement=True
                )
    name = Column(String(128), nullable=False)
    state_id = Column(Integer, ForeignKey('states.id'), nullable=False)
