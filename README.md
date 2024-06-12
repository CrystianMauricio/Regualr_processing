-------------Explanation--------------
(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}): Matches the date and time in the format YYYY-MM-DD HH:MM:SS.mmm.

\w+: Matches the log level (e.g., INFO, WARN, ERROR) but is not captured in the final result.

(\d{3}\.\d{3}\.\d{1}\.\d{1}): Matches the IP address.

(\w+): Matches the HTTP method (e.g., GET, POST, PUT, DELETE).

(\/\w+): Matches the URL path.

Running the Code
To run this Node.js script, save it in a file, say index.js, and execute it using Node.js:

---------run----------
node logParser.js
