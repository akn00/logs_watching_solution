# Log Watching Solution
This project implements a MERN stack application to provide a real-time log watching solution similar to the tail -f command in UNIX. The application streams updates from a log file hosted on a remote machine to a web-based client without requiring page refresh.

# Problem Statement
The objective is to develop a system that accomplishes the following tasks:

Implement a server-side program to monitor a given log file and stream updates in real-time.
Create a web-based client accessible via URL that displays updates from the log file as they occur.
Ensure the server can handle multiple clients simultaneously.
Load the web page once and continuously update it without reloading.

# Project Structure
project_folder
│   README.md
│
└───client
│   │   package.json
│   │   ... (other React project files)
│   │
│   └───src
│       │   App.js
│       │   ... (other React components)
│   
└───server
    │   index.js
    │   ... (other server-side files)
    │
    └───log
        │   app.log

# Implementation Details

# Client Side (React)
The React client is responsible for displaying log updates in real-time. It connects to the server using an EventSource and updates the displayed log accordingly.

Main Component: App.js

# Server Side (Node.js)
The Node.js server monitors the log file for changes and streams updates to connected clients using Server-Sent Events (SSE).

Server Script: index.js


# Usage

Start the server by navigating to the server directory and running node index.js.
Start the client by navigating to the client directory and running npm start.
Access the client interface at http://localhost:3000.
The client will display the last 10 lines of the log file initially and update in real-time as new log entries are appended.


# Constraints

The server pushes updates to clients in real-time without retransmitting the entire file.
Multiple clients can connect to the server simultaneously.
The web page does not stay in the loading state after the initial load and does not require page refreshes for updates.
Off-the-shelf libraries or tools providing tail-like functionalities are not used to ensure evaluation criteria such as code quality, testability, and modularity are met.