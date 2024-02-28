# Server-Sent Events (SSE) Log Streaming Server
This Node.js script sets up a simple HTTP server that streams the contents of a log file to clients using Server-Sent Events (SSE). SSE is a standard for sending updates from a server to a client over HTTP.

# Requirements
Node.js installed on your machine.

# Installation
Clone this repository or copy the contents of the script into a new file.
Run npm install to install the required dependencies.

# Usage
Ensure that the log file (./log/app.log by default) exists and contains the desired log data.
Start the server by running node server.js.
The server will start running on http://localhost:4000 by default.
Clients can connect to the server and receive real-time updates of the log file content.

# Configuration
Log File Path: By default, the script reads from ./log/app.log. You can change this path by modifying the logFilePath variable.
Server Port: The server listens on port 4000 by default. You can change the port by modifying the port variable.
Allowed Origins: The script allows connections from http://localhost:3000 by default. You can modify the allowed origin by changing the value of the Access-Control-Allow-Origin header in the server response.

# Features
Real-time Updates: Clients receive updates as soon as the log file changes.
Debounced Updates: To prevent flooding clients with updates, the script uses a debounce mechanism to send updates at most once per second.
Cross-Origin Resource Sharing (CORS): The server sets appropriate CORS headers to allow cross-origin requests from specified origins.

# Dependencies
http: Built-in Node.js module for creating HTTP servers.
fs: Built-in Node.js module for file system operations.

# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.