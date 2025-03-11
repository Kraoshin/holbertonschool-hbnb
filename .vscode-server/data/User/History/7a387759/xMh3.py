#!/usr/bin/python3
"""takes in an argument and displays all values in the states table
of hbtn_0e_0_usa where name matches the argument, safe from SQL injections"""

import MySQLdb
import sys

if __name__ == "__main__":
    db = MySQLdb.connect(
        host="localhost",
        port=3306,
        user=sys.argv[1],
        passwd=sys.argv[2],
        db=sys.argv[3]
    )
    cursor = db.cursor()

    cursor.execute("SELECT * FROM states WHERE name = %s", (sys.argv[4],))

    states = cursor.fetchall()

    for state in states:
        print(state)

    cursor.close()
    db.close()
