const logData = `
2024-06-10 12:34:56.789 INFO 192.168.1.1 GET /home
2024-06-10 12:35:10.123 WARN 192.168.1.2 POST /login
2024-06-10 12:35:45.456 ERROR 192.168.1.3 PUT /update
2024-06-10 12:36:00.789 INFO 192.168.1.4 DELETE /delete
2024-06-10 12:36:15.678 INFO 192.168.1.5 GET /about
`;

const regex = /(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3})\s+\w+\s+(\d{3}\.\d{3}\.\d{1}\.\d{1})\s+(\w+)\s+(\/\w+)/g;

const matches = [...logData.matchAll(regex)];

matches.forEach(match => {
    const [fullMatch, date, ip, method, url] = match;
    console.log(`Date: ${date}, IP: ${ip}, Method: ${method}, URL: ${url}`);
});
