#!/usr/bin/python3
"""print all city object"""
import sys
from model_state import Base, State
from model_city import City
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

if __name__ == '__main__':
    engine = create_engine("mysql+mysqldb://{}:{}@localhost/{}"
                           .format(sys.argv[1],
                                   sys.argv[2],
                                   sys.argv[3]))

    Base.metadata.create_all(engine)

    Session = sessionmaker(engine)
    session = Session()

    cities = (
        session.query(City, State)
        .filter(City.state_id == State.id)
        .order_by(City.id).all()
    )

    for cities, state in cities:
        print("{}: ({}) {}".format(state.name, cities.id, cities.name))
    session.close()
