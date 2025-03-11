#!/usr/bin/env python3
import requests
import csv


def fetch_and_print_posts():
    """
    Fetches posts from JSONPlaceholder and prints the status code
    along with the title of each post if the request is successful.
    """
    url = "https://jsonplaceholder.typicode.com/posts"
    response = requests.get(url)
    print(f"Status Code: {response.status_code}")

    if response.status_code == 200:
        posts = response.json()
        for post in posts:
            print(post['title'])


def fetch_and_save_posts():
    """
    Fetches posts from JSONPlaceholder and saves them to a CSV file
    named 'posts.csv' if the request is successful. The CSV file
    includes columns: id, title, and body.
    """
    url = "https://jsonplaceholder.typicode.com/posts"
    response = requests.get(url)

    if response.status_code == 200:
        posts = response.json()
        struc_data = [
            {
                "id": post["id"],
                "title": post["title"],
                "body": post["body"]
            }
            for post in posts
        ]

        with open("posts.csv", "w", newline='', encoding="utf-8") as csvfile:
            fieldnames = ["id", "title", "body"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(struc_data)


# Execute the functions
fetch_and_print_posts()
fetch_and_save_posts()
