#!/usr/bin/python3
"""
This module defines a simple HTTP server with multiple endpoints.
"""

import http.server
import json

# Define the port on which the server will listen
PORT = 8000

# Define the base request handler
server = http.server.BaseHTTPRequestHandler


class Server(server):
    """
    A custom HTTP server class that handles GET requests.
    """

    def do_GET(self):
        """
        Handles GET requests for different endpoints.
        """
        if self.path == '/':
            # Handle the root endpoint
            self.send_response(200)
            self.send_header("Content-Type", "text/plain")
            self.end_headers()
            self.wfile.write(b"Hello, this is a simple API!")

        elif self.path == "/data":
            # Handle the /data endpoint
            data = {"name": "John", "age": 30, "city": "New York"}
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(data).encode('utf-8'))

        elif self.path == "/info":
            # Handle the /info endpoint
            info = {
                "version": "1.0",
                "description": "A simple API built with http.server"
            }
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(info).encode('utf-8'))

        elif self.path == "/status":
            # Handle the /status endpoint
            self.send_response(200)
            self.send_header("Content-Type", "text/plain")
            self.end_headers()
            self.wfile.write(b"OK")

        else:
            # Handle unknown endpoints
            self.send_response(404)
            self.send_header("Content-Type", "text/plain")
            self.end_headers()
            self.wfile.write(b"Endpoint not found")


if __name__ == "__main__":
    # Create and start the HTTP server
    with http.server.HTTPServer(("", PORT), Server) as httpd:
        print(f"Serving on port {PORT}...")
        httpd.serve_forever()
